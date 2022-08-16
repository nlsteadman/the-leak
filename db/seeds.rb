require 'faker'

puts "🌱 Seeding spices..."

User.destroy_all
Location.destroy_all
Review.destroy_all
Product.destroy_all
ProductLocation.destroy_all
LocationType.destroy_all

LocationType.create(org: 'Free clinic')
LocationType.create(org: 'Food bank')
LocationType.create(org: 'Planned Parenthood')

10.times do
  User.create(
    username: Faker::Internet.username,
    password: Faker::Internet.password
  )
end

Product.create(supply: 'Pads')
Product.create(supply: 'Tampons')
Product.create(supply: 'Menstrual cups')

Location.create(
  name: 'William Temple House',
  address: '2023 NW Hoyt St, Portland, OR 97209',
  hours: 'Tues - Thurs: 11 am - 2 pm',
  image_url: 'https://s3-media0.fl.yelpcdn.com/bphoto/UhNuQAtV78_gXHaarDRK7Q/o.jpg',
  location_type_id: LocationType.second.id
)

Location.create(
  name: 'SVDP Blessed Frederic at Holy Cross',
  address: '5227 N Bowdoin St, Portland, OR 97203',
  hours: 'Tues: 10 am - 12 pm, Thurs: 5:30 pm - 7 pm',
  image_url: 'https://www.holycrosspdx.org/holy-cross-church/wp-content/uploads/2017/09/footer-logo.png',
  location_type_id: LocationType.second.id
)

Location.create(
  name: 'Columbia Park Summer Free Food Market',
  address: '7701 N Chautauqua Blvd, Portland, OR 97203',
  hours: 'Thurs: 1 pm - 2 pm',
  image_url: 'https://foodfinder.oregonfoodbank.org/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBDUT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--2f25def955fbf11afee42f3b0e5c5b9f4a62b085/OFB_logo.svg',
  location_type_id: LocationType.second.id
)

Location.create(
  name: 'Lift Urban / Legacy Good Samaritan Free Food Market',
  address: '1200 NW 23rd, Portland, OR 97210',
  hours: 'Wed: 11 am - 12 pm',
  image_url: 'https://www.lifturbanportland.org/uploads/8/3/6/3/83630366/published/img-0036_3.jpg',
  location_type_id: LocationType.second.id
)

Location.create(
  name: 'Hereford House Food Pantry',
  address: '7704 N Hereford Ave, Portland, OR 97203',
  hours: 'Fri - Sat: 12 pm - 2 pm',
  image_url: 'http://www.herefordhousepdx.org/wp-content/uploads/2015/08/Hereford-House-Sign-293x300.jpg',
  location_type_id: LocationType.second.id
)

Location.create(
  name: "Hand Up Project - People's Pantry",
  address: '4115 N Mississippi Ave, Portland, OR 97217',
  hours: 'Mon - Tues: 12 pm - 4 pm',
  image_url: 'https://www.handupproject.org/x/cdn/?https://storage.googleapis.com/production-sitelio-v1-0-1/511/247511/hMTwksti/3d7f61feb9d64429ab2b54b545896295',
  location_type_id: LocationType.second.id
)

Location.create(
  name: 'NE Portland Health Center',
  address: '3727 NE Martin Luther King Jr Boulevard, Portland, OR 97212',
  hours: 'Tues: 10 am - 4:30 pm, Wed - Sat: 7:30 am - 3:30 pm',
  image_url: 'https://www.plannedparenthood.org/uploads/filer_public_thumbnails/filer_public/95/a8/95a83655-8c2b-4aa5-a115-d3b81db56909/plannedparenthood-044.jpg__1200x675_q75_crop_subsampling-2.jpg',
  location_type_id: LocationType.third.id
)

Location.create(
  name: 'Beaverton Health Center',
  address: '12220 SW First St, Suite 200, Beaverton, OR 97005',
  hours: 'Mon & Wed: 10 am - 5:30 pm, Tues & Thurs - Fri: 8 am - 3:30 pm',
  image_url: 'https://www.plannedparenthood.org/uploads/filer_public_thumbnails/filer_public/b7/f5/b7f5096f-3318-4a46-a0c5-5ddbe7bd8fef/plannedparenthood-ppcw_beaverton-exterior-1920px.jpg__1200x675_q75_crop_subsampling-2.jpg',
  location_type_id: LocationType.third.id
)

Location.create(
  name: 'Hillman East Portland Center of Portland, OR',
  address: '14601 SE Division St, Portland, OR 97236',
  hours: 'Mon & Fri: 8 am - 3:30 pm, Tues & Thurs: 10 am - 5:30 pm, Wed: 9 am - 3:30 pm',
  image_url: 'https://www.plannedparenthood.org/uploads/filer_public_thumbnails/filer_public/d6/c8/d6c8342e-2538-47f7-b03b-899e267812f0/hillman-exterior-004.jpg__1200x675_q75_crop_subsampling-2.jpg',
  location_type_id: LocationType.third.id
)

Location.create(
  name: 'Rosewood Family Health Center',
  address: '8935 SE Powell Boulevard, Portland, OR 97266',
  hours: 'Mon - Thurs: 7:30 am - 7 pm, Fri - Sat: 7:30 am - 5 pm',
  image_url: 'https://www.freeclinics.com/gallery/18340_or_Rosewood_Family_Health_Center_czf.jpg',
  location_type_id: LocationType.first.id
)

Location.create(
  name: 'Parkrose Neighborhood Health Access',
  address: '11717 NE Shaver St, Portland, OR 97220',
  hours: '9 am - 2 pm',
  image_url: 'https://www.freeclinics.com/gallery/17734_1591649202.jpg',
  location_type_id: LocationType.first.id
)

Location.create(
  name: 'Old Town Recovery Center',
  address: '33 NW Broadway, Portland, OR 97209',
  hours: '9 am - 2 pm',
  image_url: 'https://www.freeclinics.com/gallery/21437_otrc-1.jpg',
  location_type_id: LocationType.first.id
)

Location.create(
  name: 'North Portland Health Center',
  address: '9000 N Lombard St, Portland, OR 97203',
  hours: 'Mon - Fri: 8 am - 6 pm',
  image_url: 'https://www.freeclinics.com/gallery/17411_primary-care-clinics.jpg',
  location_type_id: LocationType.first.id
)

Location.create(
  name: 'Mercy And Wisdom Healing Center',
  address: '7411 SE Powell Blvd, Portland, OR 97206',
  hours: 'Mon: 9 am - 3 pm',
  image_url: 'https://www.freeclinics.com/gallery/20604_or-mercy_and_wisdom_healing_center_lik.jpg',
  location_type_id: LocationType.first.id
)

Location.create(
  name: 'Cares NW Center',
  address: '2800 N Vancouver Ave, Portland, OR 97227',
  hours: 'Mon - Friday: 8 am - 5 pm',
  image_url: 'https://www.freeclinics.com/gallery/12801_eegvremy.jpg',
  location_type_id: LocationType.first.id
)

Location.create(
  name: 'North By Northeast Community Health Center',
  address: '714 NE Alberta St, Portland, OR 97211',
  hours: 'Mon - Friday: 9 am - 5 pm',
  image_url: 'https://www.freeclinics.com/gallery/20605_or-north_by_northeast_community_health_center_btt.gif',
  location_type_id: LocationType.first.id
)

25.times do
  Review.create(
    user_id: rand(User.first.id..User.last.id),
    location_id: rand(Location.first.id..Location.last.id),
    content: Faker::Lorem.paragraph
  )
end

20.times do
  ProductLocation.create(
    location_id: rand(Location.first.id..Location.last.id),
    product_id: rand(Product.first.id..Product.last.id)
  )
end

puts "✅ Done seeding!"