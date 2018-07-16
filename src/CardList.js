import Card from './Card';
import React from 'react';


const CardList = ({robots}) =>
{

const CardComponen = robots.map((user,i)=>
  {
  	if(true){
  		throw new Error ('Nooo!');
  	}
	return <Card 
				 key={i} 
				 id={robots[i].id} 
				 name={robots[i].name} 
				 email={robots[i].email}
				 />
  })



	return(

			<div>
				{CardComponen}
			</div>

          )


}

export default CardList;

