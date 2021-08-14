function renderPosts(boston, container) {
    const people = boston.data;
    const len = boston.data.length;
    people.sort((a,b) => b[11]-a[11]);
    let html = '<ul id="data">';
    
    for (let i = 0; i < 5; i++) {
      
      html +=
        '<li class="post" id="topSalaries">' + '<h2>' + people[i][8] + '</h2>' + '<h3>' + people[i][11] + '</h3>';
    }
    
    html+='</ul>';
  
   
    }
  
    container.innerHTML = html;
  
  
  
    // TODO: add code to display the html variable inside a ul element with id="data"
    // Hint: you can use the container parameter's innerHTML property to insert Html tags
  }
  renderPosts(boston, document.getElementById('container'));
  