import React from "react";

import {
  logo,
  logoCircle,
  loading,
  curve1,
  curve2,
  check,
  heroImage,
  whatsapp,
  instagram,
  telegram,
  fiverr,
  ic_android_studio,
  ic_app_development,
  ic_aso,
  ic_css,
  ic_flutter,
  ic_website,
  ic_html_5,
  ic_laravel,
  ic_php,
  ic_react,
  photoshop,
  team_image,
  bg_light_pattern,
  ic_download_apk,
} from "../assets";


export const whatsapp_link = "https://wa.me/+918757772761";
export const instagram_link = "https://www.instagram.com/anurag_shrivastav18/";
export const telegram_link = "https://t.me/Anurag_toxic";
export const fiverr_link = "https://www.fiverr.com/dev_anurag18/buying?source=avatar_menu_profile";

export const phone_number = "8757772761";
export const email = "anurag13360@gmail.com";
export const address = "Muradnagar, Ghaziabad, Uttar Pradesh, India";

export const navigation = [
  {
    id: "0",
    title: "Home",
    url: "/",
  },

  {
    id: "2",
    title: "Products",
    url: "/products",
  },
  {
    id: "4",
    title: "Contact Us",
    url: "/contactUs",
  },
  {
    id: "6",
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/anurag-shrivastav-b7a616327/",
    onlyMobile: true,
  },
];

export const hero_banners = ["https://shdevsolutions.com/uploadFile/uploads/sh_dev_banner_1.png", "https://shdevsolutions.com/uploadFile/uploads/sh_banner_2.png"];

export const websiteName = "Anurag Dev";

export const websiteUrl = "https://contactanurag.in";


export const techStackContent = [
  {
    id: "0",
    title: "Android Studio",
    text: "Crafting Excellence with the Latest Frameworks",
  },
  {
    id: "1",
    title: "Next-Gen Languages",
    // text: "Empowering Your Product with Advanced Programming",
  },
  {
    id: "2",
    title: "Efficient Toolsets",
    // text: "Accelerating Development Through Powerful Tools",
  },
];

export const techStackApps = [
  {
    id: "0",
    title: "Flutter",
    icon: ic_flutter,
    width: 26,
    height: 36,
  }
];

export const services = [
  {
    id: "0",
    title: "App Development",
    text: "Elevate your brand with our expertly crafted Android apps. We turn concepts into captivating user experiences, ensuring your app stands out in the market.",
    iconUrl: ic_app_development,
    imageUrl: team_image,
  },
  {
    id: "1",
    title: "Website Development",
    text: "Transform your online identity with our responsive and visually striking websites. Our blend of creativity and functionality ensures a compelling web presence.",
    iconUrl: ic_website,
    imageUrl: team_image,
    light: true,
  },
  {
    id: "2",
    title: "AI Agents",
    text: "Automate Your Manual Tasks Like Sheet Management, Content Creation using AI Agents",
    iconUrl: ic_aso,
    imageUrl: team_image,
  },
];

export const socials = [
  {
    id: "0",
    title: "Fiverr",
    iconUrl: fiverr,
    url: fiverr_link,
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: instagram_link,
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: telegram_link,
  },
  {
    id: "4",
    title: "Whatsapp",
    iconUrl: whatsapp,
    url: whatsapp_link,
  },
];

export const products = [
  {
    id: "0",
    images: [
      "https://shdevsolutions.com/uploadFile/uploads/learnzy_banners_1.png",
      "https://shdevsolutions.com/uploadFile/uploads/learnzy_banners_2.png",
      "https://shdevsolutions.com/uploadFile/uploads/learnzy_banners_3.png",
    ],
    featured_images: 2,
    title: "Learnzy - Complete LMS Solution for Modern Educators with Website, App & Admin Panel",
    category: "LMS System",
    price: "5999",
    type: "Customized",
    mrp: "15000",
    apk_link: "https://shdevsolutions.com/uploadFile/uploads/Learnzy - LMS-debug.apk",
    description: `Learnzy is a powerful and easy-to-use Learning Management System (LMS) designed to help educators, tutors, and institutes digitize their courses and grow their reach. Whether you're an individual teacher, a coaching center, or a content creator, Learnzy gives you all the tools you need to teach online, manage students, and earn seamlessly.

        With Learnzy, you can launch your own branded mobile app and website that works 24/7 for your students.

        KEY FEATURES :

        1. Login via OTP: Easy and secure student access using mobile OTP.
        2. Course Showcase: Display free and paid courses categorized by subjects or classes.
        3. Video Content Support: Upload pre-recorded or live YouTube videos for anytime learning.
        4. Mock Tests & Quizzes: Let students test their knowledge with built-in test modules.
        5. Ebooks & Notes: Sell or provide PDF notes and ebooks to your learners.
        6. Syllabus Access: Upload detailed syllabus documents for every course.
        7. Free Content Library: Share demo videos or preview content to attract learners.
        8. Smooth Payments: Accept payments via Razorpay, PhonePe, or manual UPI with coupon support.
        9. My Orders Section: Students can view and access all their purchased content.
        10. Push Notifications: Instantly notify users about new courses, updates, or promotions.
        11. WhatsApp Support: Enable direct WhatsApp chat for user support or queries.
        12. Profile Management: Users can edit and manage their personal details easily.

        🛠 Admin Panel (Laravel + PHP):

        1. Intuitive dashboard to manage everything at one place.
        2. Add/update categories, courses, videos, ebooks, PDFs, mock tests.
        3. Manage all user orders and manual payment requests.
        4. Create & manage coupon codes for discounts.
        5. Send push notifications directly from admin panel.
        6. Multi-admin access control for teams.
        7. Customize homepage banners, hero content, and settings easily.

        🌐 User Website (React.js):

        1. Clean, professional interface for desktop & mobile users.
        2. Easy navigation with course filters and previews.
        3. Purchase and access course materials directly via website.
        4. Dashboard to manage enrolled courses, tests, and downloads.

        🔐 Why Choose Learnzy?

        1. Launch under your own brand name
        2. One-time setup with lifetime value
        3. No technical skills required
        4. Saves time, increases revenue
        5. Future-ready digital solution

        Ready to take your coaching business to the next level?

        📞 Contact us today and launch your app with Learnzy - Teach Once. Earn Always.`,
    techstacks: ["Android Studio","REACT.JS", "Kotin", "PHP", "Laravel", "MYSQL"],
    video: "https://www.youtube.com/watch?v=0PtvM7X8ttY",
  },
  {
    id: "1",
    images: [
      "https://shdevsolutions.com/uploadFile/uploads/task_earner_1.png",
      "https://shdevsolutions.com/uploadFile/uploads/task_earner_2.png",
      "https://shdevsolutions.com/uploadFile/uploads/panel_ss_(1).png",
      "https://shdevsolutions.com/uploadFile/uploads/panel_ss_(2).png",
      "https://shdevsolutions.com/uploadFile/uploads/panel_ss_(6).png",
      "https://shdevsolutions.com/uploadFile/uploads/panel_ss_(5).png",
    ],
    featured_images: 2,
    title: "Task Earner App with Web-Based Admin Panel & Admob, Adx, Applovin, Facebook, Unity Ads",
    category: "Earning App",
    price: "6000",
    type: "Android",
    mrp: "8000",
    apk_link: "https://shdevsolutions.com/uploadFile/uploads/Task_Earner-release.apk",
    description: `Introducing the ultimate Task Earner App designed to maximize your earning potential. With its comprehensive suite of features and user-friendly interface, Taskify revolutionizes the way you earn rewards effortlessly.

    Key Features:
    
    Daily Bonus: Get rewarded every day just by logging in and completing tasks.
    Spin Wheel: Spin the wheel for a chance to win exciting prizes and bonuses.
    Refer & Earn: Invite friends and earn rewards for every referral that joins the app.
    Web-Based Admin Panel: Take control of your app's operations with our intuitive web-based admin panel, allowing you to manage users, tasks, rewards, and more seamlessly.
    Ad Network Integration: Taskify is integrated with leading ad networks including AdMob, Google Adx, AppLovin, Facebook Ads, and Unity Ads, enabling you to monetize your app effectively and maximize your revenue potential.
    Taskify is powered by the latest technologies and comes with a robust Laravel backend, ensuring reliability and scalability. Plus, you receive the complete source code for the app, empowering you to customize and extend its functionalities according to your unique requirements.
    Web-Based Landing Page for the App

    With Taskify, earning rewards has never been easier. Start your journey towards financial freedom today!`,
    techstacks: ["Android Studio", "JAVA", "PHP", "Laravel", "Hosting & Domain"],
    video: "https://www.youtube.com/watch?v=e-Lc-Y0dnOE",
  }
];

export const reviews = [
  {
    id: "0",
    imageUrl: "https://shdevsolutions.com/uploadFile/uploads/review_1.png",
  }
];

export const previousWorks = [
  {
    id: "0",
    imageUrl: "https://play-lh.googleusercontent.com/2nfGrJvYHPq3hFGXqiULdN0egvMUHYJnDwDV8vbH_6zq2QTdpSL4dngJJiX6zqeyw26s=w480-h960-rw",
    title: "Fincom Android App",
    link: "https://play.google.com/store/apps/details?id=com.devshiv.fincomapp",
  }
];


