

function App(){
  const [activeKey, setActiveKey] = React.useState('')
   React.useEffect(() => {
        document.addEventListener('keydown', (event) => 
        playSound(event.key.toUpperCase())
        )
    }, [])

    const audioClips = [
        {
        class:"Heater-1",
        keyCode: 81,
        keyTrigger:"Q",
        url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
                       
    },{
        class:"Heater-2",
        keyCode: 87,
        keyTrigger:"W",
        url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
    },{
        class:"Heater-3",
        keyCode: 69,
        keyTrigger:"E",
        url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
    },{
        class:"Heater-4",
        keyCode: 65,
        keyTrigger:"A",
        url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
    },{
        class:"Clap",
        keyCode: 83,
        keyTrigger:"S",
        url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
    },{
        class:"Open-HH",
        keyCode: 68,
        keyTrigger:"D",
        url:"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
    },{
        class:"Kick-n'-Hat",
        keyCode: 90,
        keyTrigger:"Z",
        url:"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
    },{
        class:"Kick",
        keyCode: 88,
        keyTrigger:"X",
        url:"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
    },{
        class:"Closed-HH",
        keyCode: 67,
        keyTrigger:"C",
        url:"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
    }];

    function playSound(selector){
        const audio = document.getElementById(selector)
        audio.play()
        setActiveKey(selector)
    }

    return(
        <div>
            {audioClips.map((clips) => 
            <div onClick={() => {
                playSound(clips.keyTrigger)
            }} className="drum-pad" id={audioClips.keyTrigger}>
                {clips.keyTrigger}
                <audio 
                className="clip" id={clips.keyTrigger} src={clips.url}>
               </audio>
            </div>)}
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById("pads"))

