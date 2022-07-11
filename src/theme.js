// - Bright Blue: hsl(220, 98%, 61%)
// - Check Background: linear-gradient hsl(192, 100%, 67%) to hsl(280, 87%, 65%)

// ### Light Theme

// - Very Light Gray: hsl(0, 0%, 98%)
// - Very Light Grayish Blue: hsl(236, 33%, 92%)
// - Light Grayish Blue: hsl(233, 11%, 84%)
// - Dark Grayish Blue: hsl(236, 9%, 61%)
// - Very Dark Grayish Blue: hsl(235, 19%, 35%)

// ### Dark Theme

const dark = {
Very_Dark_Blue: "hsl(235, 21%, 11%)",
Very_Dark_Desaturated_Blue: "hsl(235, 24%, 19%)",
Light_Grayish_Blue: "hsl(234, 39%, 85%)",
Light_Grayish_Blue_hover: "hsl(236, 33%, 92%)",
Dark_Grayish_Blue: "hsl(234, 11%, 52%)",
Very_Dark_Grayish_Blue: "hsl(233, 14%, 35%)",
Bg_Grayish_Blue: "hsl(237, 14%, 26%)"
}

export function setTheme(theme){
    if(theme === 'light'){
        document.body.style.backgroundColor = '#FFFFFF';
        document.body.style.color = 'hsl(235, 19%, 35%)';
        
        // containers

        let allContainers = document.querySelectorAll('.themed-container');
          allContainers.forEach(function(container) {
          container.style.backgroundColor = '#FFFFFF';
          container.style.color = 'hsl(235, 19%, 35%)';
        })

        // buttons

        let allButtons = document.querySelectorAll('button');
          allButtons.forEach(function(button) {
          button.style.color = 'hsl(235, 19%, 35%)';
        })
  
      } else {
        document.body.style.backgroundColor = dark.Bg_Grayish_Blue;
        document.body.style.color = '#ffffff';
  
        let allContainers = document.querySelectorAll('.themed-container');
          allContainers.forEach(function(container) {
          container.style.backgroundColor = dark.Very_Dark_Grayish_Blue;
          container.style.color = dark.Light_Grayish_Blue;
        })

        // buttons

        let allButtons = document.querySelectorAll('button');
          allButtons.forEach(function(button) {
          button.style.color = dark.Light_Grayish_Blue;
        })
      }
}