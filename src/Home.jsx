import React from 'react'
import SingleCourse from './SingleCourse'

function Home() {
  const courseDetails = [
    {
      id: 1,
      image: 'https://www.syncfusion.com/blogs/wp-content/uploads/2020/07/Top-6-Front-End-Web-Development-Tools-to-Increase-Your-Productivity-in-2020-1.jpg',
      title: 'HTML + CSS, JS, Python, SQL + Projects + GitHub',
      price: '1,999',
      off: 17,
      start: 'from 1 April',

      syllabus: `✅ HTML5 – Structure your web pages

✅ CSS3 – Style and layout with Flexbox, Grid, and animations

✅ JavaScript – Add interactivity and logic

✅ Git & GitHub – Version control and collaborative workflows

✅ Python – Backend scripting and logic handling

✅ SQL – Database fundamentals and data manipulation

✅ Bonus: Hosting your project live on GitHub Pages or free hosting platforms`,
      desc: `This comprehensive web development course is designed for beginners and aspiring developers who want to build a strong foundation in both front-end and back-end technologies.

You'll start by mastering the basics of HTML, CSS, and JavaScript to create responsive and interactive websites. Then, you'll dive into version control with Git and GitHub, helping you collaborate on real-world projects and manage code efficiently.

The backend section introduces you to Python for server-side programming and SQL for managing and querying databases. By the end of the course, you’ll have the skills to create dynamic, data-driven websites and deploy them online.`
    },
    {
      id: 2,
      image: 'https://community.nasscom.in/sites/default/files/styles/960_x_600/public/media/images/DATA%20SCIENCE%20MODEL.jpg?itok=Uw9IQgUd',
      title: 'Data Science, Power BI, Advance Excel, Projects + Linkedin Guide + Python',
      price: '2,499',
      off: 35,
      start: 'from 1 April',

      syllabus: `✅ Advanced Excel – Formulas, pivot tables, dashboards, automation

✅ Power BI – Data modeling and interactive business dashboards

✅ Tableau – Data visualization and storytelling

✅ Python for Data Science – Syntax, logic, and automation

✅ Pandas, NumPy, Matplotlib, Seaborn – Data manipulation and visualization

✅ Project-Based Learning – Real-world data analysis & dashboards

✅ Career Support – LinkedIn branding, resume tips, mock interviews`,
      desc: `This all-in-one Data Science course is designed to take you from beginner to job-ready with real-world tools and techniques. You’ll learn to analyze and visualize data using industry-standard tools like Advanced Excel, Power BI, and Tableau, helping you create professional dashboards and reports.

Next, you’ll dive into Python for data science, mastering libraries such as Pandas, NumPy, Matplotlib, and more to clean, analyze, and visualize large datasets efficiently.

The course also includes essential career guidance, such as LinkedIn profile optimization, portfolio building, and job interview preparation, giving you the confidence and skills to land your dream job in the data world.`
    },
  ]
  return (
    <div className='bg-gray-800 h-fit md:h-screen w-full p-5 flex justify-center gap-10 items-center flex-wrap'>
        {courseDetails.map((course) => (
          <div>
            <SingleCourse image={course.image} title={course.title}  price={course.price} off={course.off} start={course.start} syllabus={course.syllabus} desc={course.desc} id={course.id}/>
          </div>
        ))}
    </div>
  )
}

export default Home