test = User.create(name: "Test", username: "tester", password: "hello", image: "www.image.com")
melissa = User.create(name: "Melissa", username: "melissafunk", password: "hello", image: "https://avatars.githubusercontent.com/u/87447218?v=4")

kendall = Driver.create(name: "Kendall", username: "kendallroy", password: "hello", car_type: "Silver Honda Civic", license_plate: "3KEN123", image: "https://imgur.com/3Lwz9pN")
shiv = Driver.create(name: "Shiv", username: "shivroy", password: "hello", car_type: "Black VW Jetta", license_plate: "3SHI123", image: "https://imgur.com/bboGJjb")
roman = Driver.create(name: "Roman", username: "romanroy", password: "hello", car_type: "White Toyota Corolla", license_plate: "3ROM123", image: "https://imgur.com/R0uajFg")

service1 = Service.create(user_id: 1, driver_id: 1, agreed: true, starting_address: "110 Woolsey Sreet, San Francisco, CA 94134", ending_address: "916 Kearny Street, San Francisco, CA 94133", service_type: "Disability Support", rating: 5, price: 25, message: "I need help getting in and out of the car")
service2 = Service.create(user_id: 1, driver_id: 2, agreed: true, starting_address: "110 Woolsey Sreet, San Francisco, CA 94134", ending_address: "1 Telegraph Hill Blvd, San Francisco, CA 94133", service_type: "Hauling", rating: 4, price: 30, message: "I have a large couch that needs to be moved")
service3 = Service.create(user_id: 1, driver_id: 1, agreed: false, starting_address: nil, ending_address: nil, service_type: "Hauling", rating: nil, price: nil, message: nil)
service4 = Service.create(user_id: 1, driver_id: 1, agreed: false, starting_address: nil, ending_address: nil, service_type: "Disability Support", rating: nil, price: nil, message: nil)
service5 = Service.create(user_id: 1, driver_id: 1, agreed: false, starting_address: nil, ending_address: nil, service_type: "Pets", rating: nil, price: nil, message: nil)
service6 = Service.create(user_id: 1, driver_id: 2, agreed: false, starting_address: nil, ending_address: nil, service_type: "Hauling", rating: nil, price: nil, message: nil)
service7 = Service.create(user_id: 1, driver_id: 2, agreed: false, starting_address: nil, ending_address: nil, service_type: "Pets", rating: nil, price: nil, message: nil)
service8 = Service.create(user_id: 1, driver_id: 3, agreed: false, starting_address: nil, ending_address: nil, service_type: "Disability Support", rating: nil, price: nil, message: nil)
service9 = Service.create(user_id: 1, driver_id: 3, agreed: false, starting_address: nil, ending_address: nil, service_type: "Pets", rating: nil, price: nil, message: nil)

