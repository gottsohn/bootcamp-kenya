Array.prototype.shuffle=function(){
   
       var i = this.length,j,temp; 
           while (--i > 0) {
	           
		           j=Math.floor(Math.random()*(i));
			           temp=this[j];// takes random position in temporary 
				          this[j]=this[i];// 
					         this[i]=temp;
						         
							     }
							         return this;
								     
								         
									 }

									 var array =['A','B','C','D','E','F','G'];
									 var result=array.shuffle();

									 console.log(result);
