import { useControls } from 'leva'


export function Years() {

    const planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune", "Pluto"];

    const controls = useControls({
        PlanetYears: true
    });
  
    return (
        <div style={{
            pointerEvents: 'none',
            position: 'absolute',
            top: 0,
            left: 0,
            fontFamily: 'Bebas Neue',
            fontSize: '1em',
            fontWeight: '24',
            opacity: '100%',
            letterSpacing: '0.04em',
            display: 'flex',
            flexDirection: 'column'
            }}>
            
            {planets.map((planet) => {
                return (
                    <p key={planet} id={planet} style={{ position: 'relative', top: 40, left: 90, fontSize: '12px', opacity: controls.PlanetYears ? '100%' : '0%' }}>
                        {planet} — 0
                    </p>
                )
            })}

        </div>
    )
}