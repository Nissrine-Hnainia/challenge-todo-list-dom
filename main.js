		//select the input 
		var input = document.querySelector('input');
		//select the button ADD
		var btn = document.querySelector('.addTask > button');

		//write the function
		function addList(){
			//select the ordered list where we will add the li element
			var myList = document.querySelector('.myList');

			//create the li element
			var newLi = document.createElement('li');
			//create the delete button that we will add in each li element
			var delBtn = document.createElement('button');

			//give the delete button a trash icon
			delBtn.innerHTML = '<i class="fa fa-trash"></i>';

			//writing condition on input to fill it
			if(input.value !==''){
				newLi.textContent = input.value;
				input.value = '';
				myList.appendChild(newLi);
				newLi.appendChild(delBtn);
			}

			//adding remove to the button on click
			delBtn.addEventListener('click', function(){
				var parent = this.parentNode;
				parent.remove();
			});
		}

		btn.addEventListener('click', addList);
