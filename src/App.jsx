// thinking react 

import React from 'react'
import './App.css'


// JSON create 
const task = [
    {
        id: 'generate_id-1',
        title:'subtitle',
        createAt:'2022-09-06T05:05:05.510Z',
        tags:[ 
            {
                id:'tag-1', //jhekane array  thakbe or array of object thakbe sekhane id lagbe
                text:'It is Done ',
                icon: 'T'
            },
            {
                id:'tag-2',
                text:'It is Cancel',
                icon: 'C'
            },
            {
                id:'tag-3',
                text:'It is Progress ',
                icon: 'P'
            },
            {
                id:'tag-4',
                text:'Just wrote this ',
                icon: 'w'
            },
        ],
       
        comments:[
            {
                id: 'comment-1',
                user:{
                   avatar:'xyz.com',
                   name:'John',
                   id: 'user-id-1'
                },
                text: 'Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem'
                
            },
        ],
    
        tasks:[
            {
                id:'task-1',
                title:'Foggy Neison',
                text: "Here to clean the street of Hell's Kitchen ",
                status:'done'
            },
            {
                id:'task-2',
                title:'Louis',
                text: "Here to clean the street of Hell's Kitchen ",
                status:'cancelled'
            },
            {
                id:'task-3',
                title:'Albert Einstein',
                text: "Here to clean the street of Hell's Kitchen ",
                status:'progress'
            },
            {
                id:'task-4',
                title:'Foggy Neison',
                text: "Here to clean the street of Hell's Kitchen ",
                status:'progress'
            },
        ],
     
    },
    {
        id: 'generate_id-1',
        title:'subtitle',
        createAt:'2022-09-06T05:05:05.510Z',
        tags:[ 
            {
                id:'tag-1', // jhekane array  thakbe or array of object thakbe sekhane id lagbe
                text:'It is Done ',
                icon: 'T'
            },
          
            {
                id:'tag-4',
                text:'Just wrote this ',
                icon: 'w'
            },
        ],
       
        comments:[
            {
                id: 'comment-2',
                user:{
                   avatar:'xyz.com',
                   name:'Smith',
                   id: 'user-id-1'
                },
                text: 'Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem'
                
            },
        ],
    
        tasks:[
         
            {
                id:'task-2',
                title:'Louis',
                text: "Here to clean the street of Hell's Kitchen ",
                status:'cancelled'
            },
            {
                id:'task-3',
                title:'Albert Einstein',
                text: "Here to clean the street of Hell's Kitchen ",
                status:'progress'
            },
          
        ],
     
    },
    {
        id: 'generate_id-1',
        title:'subtitle',
        createAt:'2022-09-06T05:05:05.510Z',
        tags:[ 
            {
                id:'tag-1', // jhekane array  thakbe or array of object thakbe sekhane id lagbe
                text:'It is Done ',
                icon: 'T'
            },
            {
                id:'tag-2',
                text:'It is Cancel',
                icon: 'C'
            },
          
        ],
       
        comments:[
            {
                id: 'comment-3',
                user:{
                   avatar:'xyz.com',
                   name:'Albert',
                   id: 'user-id-1'
                },
                text: 'Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem'
                
            },
        ],
    
        tasks:[
            {
                id:'task-1',
                title:'Foggy Neison',
                text: "Here to clean the street of Hell's Kitchen ",
                status:'done'
            },
            {
                id:'task-2',
                title:'Louis',
                text: "Here to clean the street of Hell's Kitchen ",
                status:'cancelled'
            },
          
        ],
     
    }
];

function getDay (dateStr){
   const date = new Date(dateStr).getDay();
//    console.log(date); // 2
   const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'] ;
   //    console.log(days[date])// tuesday
      return days[date]; // days array te 2 no index e day ta pabo
}

function formatDate(dateStr){
    const date = new Date(dateStr);
    // console.log(date); // Tue Sep 06 2022 11:05:05
    return `${date.getDate()} / ${date.getMonth() + 1} / ${date.getFullYear()}`
}

console.log(getDay(task.createAt))// tuesday
formatDate(task.createAt);


// create component
// tag component
const TagListItem = ({tag})=>{
  return  (
    <li>
        <small>{tag.icon}</small> - {tag.text}
    </li>
  )
}


// comment Component
const Comment = ({comment})=>{
    return(
        <div>
          <h3>{comment.user.name}</h3>
          <p>{comment.text}</p>
        </div>

    )
}



const App = () => {


  return (
    <> Todo App
       <div className='card-group'>
        {
            task.map((task)=>(
                <div className='day-card'>
                <h1>{getDay(task.createAt)}, {formatDate(task.createAt)}</h1>
                <h3>{task.title}</h3>
                <ul style={{listStyle:'none'}}>
                    {
                        task.tags.map((tag)=>(
                            <TagListItem key={tag.id} tag={tag} />
                        ))
                    }
                </ul>
                <hr style={{height:'3px'}}/>
                <p>Notes Linked To People</p>
                <div>
                    {
                        task.comments.map((comment)=>(
                           <Comment key={comment.id} comment={comment} />
                        ))
                    }
                </div>
          
                <div>
                    <ul style={{listStyle:'none'}}>
                        {
                            task.tasks.map((task)=>(
                                <li style={{border:'1px solid' , borderRadius:'1rem' }} >
                                <h3>{task.title}</h3>
                                <p>{task.text}</p>
                                <h4>{task.status}</h4>
                            </li>
                            ))
                        }
                    </ul>
                </div>
        
               </div>
            ))
        }
       </div>
    </>
  )
}

export default App ;