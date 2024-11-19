const socket = io();

socket.emit("baby");
socket.on("baby mil gya",()=>{
    console.log("ok res agay wapiss")
});

