User.create(name: "Test", username: "tester", password: "hello", image: "www.image.com")
User.create(name: "Melissa", username: "melissafunk", password: "hello", image: "https://avatars.githubusercontent.com/u/87447218?v=4")

Driver.create(name: "Kendall", username: "kendallroy", password: "hello", car_type: "Silver Honda Civic", license_plate: "3KEN123", image: "https://i.imgur.com/3Lwz9pN.jpg", service_types: "Hauling, Pets, Disability Support")
Driver.create(name: "Shiv", username: "shivroy", password: "hello", car_type: "Black VW Jetta", license_plate: "3SHI123", image: "https://i.imgur.com/bboGJjb.jpg", service_types: "Hauling, Pets")
Driver.create(name: "Roman", username: "romanroy", password: "hello", car_type: "White Toyota Corolla", license_plate: "3ROM123", image: "https://i.imgur.com/R0uajFg.jpg", service_types: "Pets")

Service.create(user_id: 2, driver_id: 1, agreed: true, starting_address: "110 Woolsey Sreet, San Francisco, CA 94134", ending_address: "916 Kearny Street, San Francisco, CA 94133", service_type: "Disability Support", rating: 5, price: 25, message: "I need help getting in and out of the car")


