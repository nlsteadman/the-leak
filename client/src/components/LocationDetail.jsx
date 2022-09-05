import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import ProductCard from './ProductCard';
import ReviewCard from './ReviewCard';
import { headers, getToken } from './Globals';
import { MyContext } from '../context/MyContext';


const LocationDetail = () => {
    const {locations} = useContext(MyContext);
    const {loggedIn} = useContext(MyContext);
    const {reviews} = useContext(MyContext);
    const {currentUser} = useContext(MyContext);
    const {addToList} = useContext(MyContext);

    const [location, setLocation] = useState({ products: [], reviews: [] });
    const [locationReviews, setLocationReviews] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate();


    useEffect(() => {
        if( locations ) {
            setLocation(locations.find(location => location.id.toString() === id));
        }
    }, [locations, id])

    useEffect(() => {
        if (reviews) {
            setLocationReviews(reviews.filter(review => review.location_id.toString() === id))
        }
    }, [reviews, id])


    const locationTypeDetails = () => {
        if (location.location_type) {
            return ( 
                <div id="location-type-div">
                    <div id="location-type-info">
                        <p>Location Type: { location.location_type.org }</p>
                    </div>
                </div>
            )
        } 
    }

    const productCards = location.products.map(product => <ProductCard key={ product.id } product={ product } />)

    const reviewCards = locationReviews.map(review => <ReviewCard key={ review.id } review={ review } />)


        
    const handleSubmit = () => {
        if (loggedIn) {
            const params = {
                review: {
                    "user_id": currentUser.id,
                    "location_id": id,
                    "content": ""
                }
            }
    
            fetch('/reviews', {
                method: "POST",
                headers: {
                    ...headers,
                    ...getToken()
                },
                body: JSON.stringify(params)
            })
                .then(r => r.json())
                .then(review => {
                    addToList(review);
                    navigate('/users/:id')
                })
        }
    }

  return (
    <div>
        <h3 id="detail-location-name">{ location.name }</h3>
        <br/>
        <br/>
        <div id="detail-detail">
            <div id="detail-card">
                <div id="detail-location-img">
                    <img src={ location.image_url } alt="location" height="550" width="400"/>
                </div>
                <div>
                    <div id="products">
                        <h3 id="heading">Products: </h3>
                        { productCards }
                    </div>
                    <div id="list-button">
                        <button onClick={ handleSubmit }>Add to my list</button>
                    </div>
                </div>
            </div>
            <div id="detail-info">
                <div id="location-description">
                    <p>{ location.address }</p>
                    <p>{ location.hours }</p>
                    { locationTypeDetails() }
                </div>
            </div>
        </div>
        <br/>
        <br/>
        <br/>
        <div>
            <h3 id="heading">Reviews: </h3>
            <div id="review-cards">
            { reviewCards }
            </div>
        </div>
    </div>
  )
}

export default LocationDetail;