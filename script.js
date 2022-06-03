function timer(seconds) {
    const now = Date.now();
    const then = now + seconds * 1000;
    console.log('seconds:', seconds)
    
    setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        console.log(secondsLeft);
    }, 1000);

}