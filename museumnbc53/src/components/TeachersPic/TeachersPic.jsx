// TeacherPic.js
import React, { useState } from 'react';
import logo from './IMG/5240491981459811876.jpg'
import pic2 from './IMG/5240491981459811872.jpg';
const teachers = [
  {
    id: 1,
    name: "Анна Иванова",
    subject: "Преподаватель Математика",
    bio: "1920-1980 гг.",
    image: logo
  },
  {
    id: 2,
    name: "Петр Сергеев",
    subject: "Преподаватель Физика",
    bio: "1920-1980 гг.",
    image: pic2
  },
  {
    id: 3,
    name: "Елена Павлова",
    subject: "Преподаватель Литература",
    bio: "1920-1980 гг.",
    image:logo
  },
  {
    id: 1,
    name: "Анна Иванова",
    subject: "Преподаватель Математика",
    bio: "1920-1980 гг.",
    image: logo
  },
  {
    id: 2,
    name: "Петр Сергеев",
    subject: "Преподаватель Физика",
    bio: "1920-1980 гг.",
    image: pic2
  },
  {
    id: 3,
    name: "Елена Павлова",
    subject: "Преподаватель Литература",
    bio: "1920-1980 гг.",
    image:logo
  },
  {
    id: 1,
    name: "Анна Иванова",
    subject: "Преподаватель Математика",
    bio: "1920-1980 гг.",
    image: logo
  },
  {
    id: 2,
    name: "Петр Сергеев",
    subject: "Преподаватель Физика",
    bio: "1920-1980 гг.",
    image: pic2
  },
  {
    id: 3,
    name: "Елена Павлова",
    subject: "Преподаватель Литература",
    bio: "1920-1980 гг.",
    image:logo
  },
  {
    id: 1,
    name: "Анна Иванова",
    subject: "Преподаватель Математика",
    bio: "1920-1980 гг.",
    image: logo
  },
  {
    id: 2,
    name: "Петр Сергеев",
    subject: "Преподаватель Физика",
    bio: "1920-1980 гг.",
    image: pic2
  },
  {
    id: 3,
    name: "Елена Павлова",
    subject: "Преподаватель Литература",
    bio: "1920-1980 гг.",
    image:logo
  },
  {
    id: 1,
    name: "Анна Иванова",
    subject: "Преподаватель Математика",
    bio: "1920-1980 гг.",
    image: logo
  },
  {
    id: 2,
    name: "Петр Сергеев",
    subject: "Преподаватель Физика",
    bio: "1920-1980 гг.",
    image: pic2
  },
  {
    id: 3,
    name: "Елена Павлова",
    subject: "Преподаватель Литература",
    bio: "1920-1980 гг.",
    image:logo
  },
];

function TeacherCard({ teacher }) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 300);
  };

  return (
    <div 
      className={`teacher-card ${isClicked ? 'clicked' : ''}`} 
      onClick={handleClick}
    >
      <img src={teacher.image} alt={teacher.name} className="teacher-image" />
      <div className="teacher-info">
        <div className="teacher-name">{teacher.name}</div>
        <div className="teacher-subject">{teacher.subject}</div>
        <p className="teacher-bio">{teacher.bio}</p>
      </div>
    </div>
  );
}

function TeachersPic() {
  return (
    <div className="teacher-grid">
      
      {teachers.map(teacher => (
        <TeacherCard key={teacher.id} teacher={teacher} />
      ))}
      <style jsx>{`
        .teacher-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 10rem;
          padding: 2rem;
          background-color: #f0f8ff;
        }
        .teacher-card {
          background-color: white;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
          transition: transform 0.3s ease;
          margin-top:200px;
        }
        .teacher-card:hover {
          transform: translateY(-5px);
        }
        .teacher-card.clicked {
          transform: scale(1.05);
        }
        .teacher-image {
          width: 300px;
          height: 370px;
          object-fit:cover;
        }
        .teacher-info {
          padding: 1rem;
        }
        .teacher-name {
          font-size: 1.2rem;
          font-weight: bold;
          color: #45B3D6;
          margin-bottom: 0.5rem;
        }
        .teacher-subject {
          font-style: italic;
          color: #666;
          margin-bottom: 1rem;
        }
        .teacher-bio {
          font-size: 0.9rem;
        }
        @media (max-width: 768px) {
          .teacher-grid {
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          }
        }
      `}</style>
    </div>
  );
}

export default TeachersPic;