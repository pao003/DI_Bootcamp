let libButton = document.getElementById("lib-button");
      let libIt = function() {
        let storyDiv = document.getElementById("story");
        let noun = document.getElementById("noun").value;
        let adjective = document.getElementById("adjective").value;
        let person = document.getElementById("person").value;
        storyDiv.innerHTML =
          "I was looking for a " +
          noun +
          " and when I found it, I could not believe how " +
          adjective +
          " is it. " +
          person +
          " was the one who helped me find it.";
      };
      libButton.addEventListener("click", libIt);