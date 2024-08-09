/* Basic Styling */
body {
    font-family: 'Open Sans', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f5f5f5;
    color: #333;
}

header {
    background-color: #fff;
    padding: 1rem 0;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

nav ul {
    list-style: none;
    padding: 0;
    margin: 0;
    text-align: center;
}

nav li {
    display: inline-block;
    margin: 0 1rem;
}

nav a {
    text-decoration: none;
    color: #333;
    font-weight: bold;
    transition: color 0.3s ease;
}

nav a:hover {
    color: #007bff;
}

/* Hero Section */
.hero {
    background-color: #007bff;
    color: #fff;
    padding: 4rem 0;
    text-align: center;
}

.hero-content {
    max-width: 800px;
    margin: 0 auto;
}

.hero h1, .hero h2 {
    margin-bottom: 1rem;
}

.hero button {
    background-color: #fff;
    color: #007bff;
    padding: 1rem 2rem;
    border: none;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;
}

.tagline-container {
    margin-top: 2rem;
    display: none; /* Initially hide the taglines */
    animation: tagline-animation 3s linear infinite; /* Add animation */
}

.tagline {
    display: block;
    margin-bottom: 1rem;
    font-size: 1.2rem;
}

/* Introduction Section */
.introduction {
    padding: 2rem;
    text-align: center;
}

.introduction h2 {
    margin-bottom: 1rem;
}

.introduction p {
    line-height: 1.6;
}

/* Featured Products Section */
.featured-products {
    padding: 2rem;
    text-align: center;
}

.featured-products h2 {
    margin-bottom: 1rem;
}

.featured-products p {
    line-height: 1.6;
}

/* Testimonials Section */
.testimonials {
    padding: 2rem;
    text-align: center;
}

.testimonials h2 {
    margin-bottom: 1rem;
}

.testimonials p {
    line-height: 1.6;
}

/* Footer */
footer {
    background-color: #333;
    color: #fff;
    padding: 1rem 0;
    text-align: center;
}

footer nav ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

footer nav li {
    display: inline-block;
    margin: 0 1rem;
}

footer nav a {
    text-decoration: none;
    color: #fff;
    font-weight: bold;
    transition: color 0.3s ease;
}

footer nav a:hover {
    color: #007bff;
}

/* Carousel Styling */
.carousel {
    /* Add styling for the carousel container */
}

/* Testimonial Container */
.testimonial-container {
    /* Add styling for the testimonial container */
}

/* Animation */
@keyframes tagline-animation {
    0% {
        opacity: 1;
    }
    33.33% {
        opacity: 0;
    }
    66.66% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
