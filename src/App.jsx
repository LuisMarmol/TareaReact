import Header from './components/Header.jsx';
import StarCraftFactions from './components/StarCraftFactions.jsx';
import { FACTIONS_DATA } from './data';

function App() {
  return (
    <div>
      
      <Header />

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