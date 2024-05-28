import { FACTIONS_DATA } from './data';

function StarCraftFactions(props) {
  return (
    <li>
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}

function App() {
  return (
    <div>
      <main>
        <h2>Time to get Started!</h2>
          
          <section id="core-concepts">
            <h2>Facciones de StarCraft</h2>
            
            <ul>
              <StarCraftFactions 
              image={FACTIONS_DATA[0].image}
              title={FACTIONS_DATA[0].title}
              description={FACTIONS_DATA[0].description}
              />

              <StarCraftFactions 
              image={FACTIONS_DATA[1].image}
              title={FACTIONS_DATA[1].title}
              description={FACTIONS_DATA[1].description}
              />

              <StarCraftFactions 
              image={FACTIONS_DATA[2].image}
              title={FACTIONS_DATA[2].title}
              description={FACTIONS_DATA[2].description}
              />

              <StarCraftFactions 
              image={FACTIONS_DATA[3].image}
              title={FACTIONS_DATA[3].title}
              description={FACTIONS_DATA[3].description}
              />
            </ul>
          </section>
      </main>
    </div>
  );
}

export default App;