import './App.css'
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';

gsap.registerPlugin(Draggable);

function App() {
  const squareRef = useRef(null);
  const squareRef2= useRef(null);
  const squareRef3= useRef(null);
  const squareRef4= useRef(null);
  const squareRef5= useRef(null);
    const containerRef = useRef(null);

  useEffect(() => {
    Draggable.create(squareRef.current, { 
      type: 'x,y', 
      bounds: containerRef.current,
      edgeResistance:0.5,
      dragResistance : 0.2,
      onDragEnd: function() {
        gsap.to(squareRef.current, { 
          x: "+=" + this.xVelocity * 30, 
          y: "+=" + this.yVelocity * 30,
          duration: 6, 
        
        });
      }
    });
   
    Draggable.create(squareRef2.current, { 
      type: 'x,y', 
      bounds: containerRef.current,
      edgeResistance:0.5,
      dragResistance : 0.2,
      onDragEnd: function() {
        gsap.to(squareRef2.current, { 
          x: "+=" + this.xVelocity * 30, 
          y: "+=" + this.yVelocity * 30,
          duration: 6, 
        
        });
      }
    });
   
    Draggable.create(squareRef3.current, { 
      type: 'x,y', 
      bounds: containerRef.current,
      edgeResistance:0.5,
      dragResistance : 0.2,
      onDragEnd: function() {
        gsap.to(squareRef3.current, { 
          x: "+=" + this.xVelocity * 30, 
          y: "+=" + this.yVelocity * 30,
          duration: 6, 
        
        });
      }
    });
   
    Draggable.create(squareRef4.current, { 
      type: 'x,y', 
      bounds: containerRef.current,
      edgeResistance:0.5,
      dragResistance : 0.2,
      onDragEnd: function() {
        gsap.to(squareRef4.current, { 
          x: "+=" + this.xVelocity * 30, 
          y: "+=" + this.yVelocity * 30,
          duration: 6, 
        
        });
      }
    });
   
    Draggable.create(squareRef5.current, { 
      type: 'x,y', 
      bounds: containerRef.current,
      onDragEnd: function() {
        gsap.to(squareRef5.current, { 
          x: "+=" + this.xVelocity * 30, 
          y: "+=" + this.yVelocity * 30,
          duration: 6, 
        
        });
      }
    });
   
 
  }, []);

  return (
    <div ref={containerRef} className="container" style={{ display: 'flex', justifyContent: 'center', width: '80%', height: '700px', borderRadius:'18px 18px 18px 18px', border: "6px solid #ffffff", }}>
      
      <div ref={squareRef} className='cardcontainer' style={{ width: '200px', height: '200px',background: 'rgba( 82, 81, 81, 0.5 )',boxShadow:' 0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',backdropFilter: 'blur( 13.5px )',borderRadius: '10px',border:' 1px solid rgba( 255, 255, 255, 0.18 )', textAlign:'center',justifyContent:'center', display:'flex',alignItems:'center',}}>
        <p className='textcard'>html</p>
        </div>
        <div ref={squareRef2} className='cardcontainer' style={{ width: '200px',height: '200px',background: 'rgba( 82, 81, 81, 0.5 )',boxShadow:' 0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',backdropFilter: 'blur( 13.5px )',borderRadius: '10px',border:' 1px solid rgba( 255, 255, 255, 0.18 )', textAlign:'center',justifyContent:'center', display:'flex',alignItems:'center',}}>
        <p className='textcard'>javascript</p>
        </div>
        <div ref={squareRef3} className='cardcontainer' style={{ width: '200px',height: '200px',background: 'rgba( 82, 81, 81, 0.5 )',boxShadow:' 0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',backdropFilter: 'blur( 13.5px )',borderRadius: '10px',border:' 1px solid rgba( 255, 255, 255, 0.18 )', textAlign:'center',justifyContent:'center', display:'flex',alignItems:'center',}}>
        <p className='textcard'>css</p>
        </div>
        <div ref={squareRef4} className='cardcontainer' style={{ width: '200px',height: '200px',background: 'rgba( 82, 81, 81, 0.5 )',boxShadow:' 0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',backdropFilter: 'blur( 13.5px )',borderRadius: '10px',border:' 1px solid rgba( 255, 255, 255, 0.18 )', textAlign:'center',justifyContent:'center', display:'flex',alignItems:'center',}}>
        <p className='textcard'>react</p>
        </div>
        <div ref={squareRef5} className='cardcontainer' style={{ width: '200px',height: '200px',background: 'rgba( 82, 81, 81, 0.5 )',boxShadow:' 0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',backdropFilter: 'blur( 13.5px )',borderRadius: '10px',border:' 1px solid rgba( 255, 255, 255, 0.18 )', textAlign:'center',justifyContent:'center', display:'flex',alignItems:'center',}}>
        <p className='textcard'>gsap</p>
        </div>
    </div>
    
    );
}

export default App;
