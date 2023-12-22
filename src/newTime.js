const newTime = () => {
    const newTime = new Date().toISOString().split("T");
    const finalTime = newTime[1].slice(0, 8) + " " + newTime[0];

    return finalTime;
}

export default newTime;