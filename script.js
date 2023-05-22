// function to update the time
updateTime = () => {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  //add leading zeros if the value is less then 10
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  //create a string in the format HH:MM:SS
  const timeString = hours + ":" + minutes + ":" + seconds;

  //update the time display
  document.getElementById("time").textContent = timeString;
};

updateTime();

//update time every second
setInterval(updateTime, 1000);
