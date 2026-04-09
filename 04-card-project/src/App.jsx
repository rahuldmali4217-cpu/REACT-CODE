import React from 'react'
import Card from './components/Card';


const App = () => {

    const jobs = [
        {
            brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/500px-Google_%22G%22_logo.svg.png",
            companyName: "Google",
            datePosted: "5 days ago",
            post: "Frontend Developer",
            tag1: "Fulltime",
            tag2: "Junior Level",
            pay: "$45/hr",
            location: "Mumbai, India"
        },
        {
            brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHWXIPNdXbKSE0eC4wiiIMmO7aTUjuws_4hw&s",
            companyName: "Apple",
            datePosted: "2 weeks ago",
            post: "UI Engineer",
            tag1: "Fulltime",
            tag2: "Mid Level",
            pay: "$55/hr",
            location: "Bangalore, India"
        },
        {
            brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNbpIfA-_GwTVZBVlpCvdIcLVOsCxn4BmqHA&s",
            companyName: "Meta",
            datePosted: "1 week ago",
            post: "React Developer",
            tag1: "Parttime",
            tag2: "Junior Level",
            pay: "$40/hr",
            location: "Hyderabad, India"
        },
        {
            brandLogo: "https://cdn.vectorstock.com/i/500p/39/87/amazon-icon-black-and-white-vector-34243987.jpg",
            companyName: "Amazon",
            datePosted: "10 days ago",
            post: "Full Stack Developer",
            tag1: "Fulltime",
            tag2: "Mid Level",
            pay: "$60/hr",
            location: "Pune, India"
        },
        {
            brandLogo: "https://www.citypng.com/public/uploads/preview/netflix-vector-flat-logo-735811696261671nhzlvgcmyf.png",
            companyName: "Netflix",
            datePosted: "3 weeks ago",
            post: "Backend Engineer",
            tag1: "Fulltime",
            tag2: "Senior Level",
            pay: "$75/hr",
            location: "Delhi, India"
        },
        {
            brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4YldbYTh13cPhXvyb1G4LR5Uog6Hc1HOFRg&s",
            companyName: "Microsoft",
            datePosted: "6 days ago",
            post: "Software Engineer",
            tag1: "Fulltime",
            tag2: "Junior Level",
            pay: "$50/hr",
            location: "Noida, India"
        },
        {
            brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtS7slbk3ORcIF1bsC2r5pO0ZC4wI3G7L-ew&s",
            companyName: "Adobe",
            datePosted: "4 weeks ago",
            post: "Frontend Engineer",
            tag1: "Parttime",
            tag2: "Mid Level",
            pay: "$52/hr",
            location: "Bangalore, India"
        },
        {
            brandLogo: "https://static.vecteezy.com/system/resources/thumbnails/067/941/693/small_2x/uber-logo-rounded-hd-free-png.png",
            companyName: "Uber",
            datePosted: "8 days ago",
            post: "Web Developer",
            tag1: "Fulltime",
            tag2: "Junior Level",
            pay: "$42/hr",
            location: "Mumbai, India"
        },
        {
            brandLogo: "https://i.pinimg.com/736x/0c/b0/9c/0cb09cc3f375216a00c481b398584faa.jpg",
            companyName: "NVIDIA",
            datePosted: "10 days ago",
            post: "AI Engineer",
            tag1: "Full Time",
            tag2: "Senior Level",
            pay: "$80/hr",
            location: "Santa Clara, USA"
        },
        {
            brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Tesla_logo.png/500px-Tesla_logo.png",
            companyName: "Tesla",
            datePosted: "12 days ago",
            post: "Software Developer",
            tag1: "Fulltime",
            tag2: "Mid Level",
            pay: "$65/hr",
            location: "Bangalore, India"
        }
    ];



    return (
        <div className='parent'>

            {jobs.map((element, idx) => {
                return <div key={idx}>
                    <Card key={idx} brandLogo={element.brandLogo} companyName={element.companyName} datePosted={element.datePosted} post={element.post} tag1={element.tag1} tag2={element.tag2} pay={element.pay} location={element.location} />
                </div>
            })}

        </div>
    )
}

export default App
