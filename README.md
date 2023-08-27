# ShopCom: Your Ultimate E-commerce Solution
ShopCom is a robust and feature-rich e-commerce platform built on the **MERN (MongoDB, Express, React, Node)** stack. This platform is designed to revolutionize the online shopping experience by offering a comprehensive range of functionalities and user-centric features.
## Deployment (Heroku)
https://shopcom-app-1f8462c52fa4.herokuapp.com/
## Key Features
- **Dynamic Shopping Cart:** Seamlessly manage your selected products, adjust quantities, and proceed through the checkout process.
- **User Reviews and Ratings:** Empower your customers to leave reviews and ratings, enhancing product transparency and informed decision-making.
- **Top Products Carousel:** Highlight trending and top-rated products in an interactive carousel, catching users' attention and guiding them to popular choices.
- **Admin Control Panel:** Administrators have full control over products, users, and orders. Efficiently manage and update product listings, track orders, and oversee user activities.
- **Secure Payment Integration:** Facilitate safe and convenient transactions through PayPal API and credit card options, ensuring customer trust and security.
## Access Credentials
-**Admin Access**:

Name: Admin User

Email: admin@example.com

Password: 123456

-**Sample User Access**:

Anush Dubey

Email: anush@example.com

Password: 123456

## Getting Started Locally
- **Create a MongoDB Database:** Set up a MongoDB database and obtain your MongoDB URI from MongoDB Atlas.

- **PayPal Integration:** Create a PayPal account and obtain your Client ID from PayPal Developer.

- **Environment Variables:** Create .env file in root and provide necessary environment variables like
```
MONGO_URI=....
NODE_ENV=development
PORT=5000
JWT_SECRET=.....
PAYPAL_CLIENT_ID=.....
```

- **Install Dependencies:** 
```
npm install
cd client
npm install
```

- **Run the Project:**
```
cd ..
npm run dev
```
