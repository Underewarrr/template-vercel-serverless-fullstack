import Link from "next/link";
import { Card, ListGroup, Container, Button } from "react-bootstrap";
import Header from "./components/Header";
import { MDBBreadcrumb, MDBBreadcrumbItem, MDBCol, MDBRow } from "mdb-react-ui-kit";

export default function Index() {
  return (
    <>
      <Header />
    
      <Card bg="dark" id="index-card">
        <Card.Header className="text-white">
            Recompensas Para Os Jogadores do Open_Beta
        </Card.Header>
        <Card.Body className="text-white">
          <h2>Você que participou do nosso open beta sera recompensado</h2>
        <Card.Text className="text-white">
          Você recebera uma recompensa de acordo com o seu level e quantidade de donate feita no open_beta!
          </Card.Text>
          <div className="d-grid gap-2btn-block">

            <Button className="btn btn-success">Obter Recompensa</Button>
            </div>
          
          </Card.Body>
          <Card.Body>
          <div className="d-flex justify-content-around">
          <Card id="card-inside-news" style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                <Card.Body>
                  <Card.Title>Outfits</Card.Title>
                  <Card.Text>
                   Outfits Unicas para jogadores do openBeta.
                  </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>Após resgatar sua recompensa, re-logue seu personagem</ListGroup.Item>
                </ListGroup>
                
          </Card>
          <Card id="card-inside-news" style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                <Card.Body>
                  <Card.Title>Decorações</Card.Title>
                  <Card.Text>
                   Decorações para sua casa Unica para jogadores do openBeta.
                  </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>Após resgatar sua recompensa, re-logue seu personagem</ListGroup.Item>
                </ListGroup>
                
          </Card>
          <Card id="card-inside-news" style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                <Card.Body>
                  <Card.Title>Addon Pokemon</Card.Title>
                  <Card.Text>
                   Addon Pokemon Unico para jogadores do openBeta.
                  </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>Após resgatar sua recompensa, re-logue seu personagem</ListGroup.Item>
                </ListGroup>
                
          </Card>
          </div>
          </Card.Body>
      </Card>
     
     <Card bg="dark" id="index-card">
      <Card.Header className="text-white">
          Abertura oficial Pokexadventure
      </Card.Header>
      <Card.Body className="text-white">
        <h2>Está preparado para explorar ainda mais o universo de pokexadventures</h2>
      <Card.Text className="text-white">
        Preparem-se Treinadores o mundo do Pokexadventure está de volta com muitas novidades esperando por você.<br/>
        Fique por dentro de nossos updates.
        </Card.Text>
      </Card.Body>
      
      <div className="d-flex justify-content-around">
      <Card id="card-inside-news" style={{ width: '18rem' }}>
              <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
            <Card.Body>
              <Card.Title>Shiny Coin</Card.Title>
              <Card.Text>
                Ao derrotar qual quer boss ou mini boss no jogo você pode encontrar seus shiny coins, exemplo : ao derrotar um Boss Shiny Gengar o mesmo tem uma grande chance de dropar um Shiny Coin do tipo Gengar.
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Libere shinys em seu shiny scanner</ListGroup.Item>
            </ListGroup>
            
      </Card>

      <Card id="card-inside-news" style={{ width: '18rem' }}>
              <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
            <Card.Body>
              <Card.Title>Boss System</Card.Title>
              <Card.Text>
                Ao derrotar qual quer um dos bosses do jogo você ganha o direito de derrotar um mini boss.
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Ao derrotar um boss consiga Shiny Coin</ListGroup.Item>
              <ListGroup.Item>Um boss pode ser enfrentado a cada 8 Horas</ListGroup.Item>
              <ListGroup.Item>Recompensas Unicas</ListGroup.Item>
            </ListGroup>
            
      </Card>

      <Card id="card-inside-news" style={{ width: '18rem' }}>
              <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
            <Card.Body>
              <Card.Title>Mini Boss System</Card.Title>
              <Card.Text>
                Ao derrotar um mini boss você pode obter Refil para seu shiny scanner.
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Ao derrotar um boss consiga Shiny Refill</ListGroup.Item>
              <ListGroup.Item>Um mini boss pode ser enfrentado a cada 8 Horas</ListGroup.Item>
              <ListGroup.Item>Recompensas Unicas</ListGroup.Item>
            </ListGroup>
           
      </Card>

      <Card id="card-inside-news" style={{ width: '18rem' }}>
              <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
            <Card.Body>
              <Card.Title>Shiny Scanner</Card.Title>
              <Card.Text>
               Encontre Shinys utilizando o seu shiny scanner.
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Varios spots diferentes no mapa</ListGroup.Item>
              <ListGroup.Item>Cada spot com uma chance e um spawn diferente</ListGroup.Item>
              <ListGroup.Item>Recompensas Unicas</ListGroup.Item>
            </ListGroup>
           
      </Card>



          
    </div>
    <div className="d-flex justify-content-around">

    <Card id="card-inside-news" style={{ width: '18rem' }}>
              <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
            <Card.Body>
              <Card.Title>Addon System</Card.Title>
              <Card.Text>
               Consiga addons para o seu personagem explorando e concluindo missões.
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Mais de 50 outfits disponiveis</ListGroup.Item>
              <ListGroup.Item>Cada outfit te da um atributo diferente</ListGroup.Item>
            </ListGroup>
           
      </Card>
      <Card id="card-inside-news" style={{ width: '18rem' }}>
              <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
            <Card.Body>
              <Card.Title>Pokemon Addon</Card.Title>
              <Card.Text>
              Consiga addons para o seu pokemon explorando e concluindo missões.
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
            <ListGroup.Item>Mais de 50 outfits disponiveis</ListGroup.Item>
            </ListGroup>
          
      </Card>

      <Card id="card-inside-news" style={{ width: '18rem' }}>
              <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
            <Card.Body>
              <Card.Title>House Decoration System</Card.Title>
              <Card.Text>
              Consiga items para decorar sua house.
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
            <ListGroup.Item>Mais de 500 Items disponiveis</ListGroup.Item>
            </ListGroup>
           
      </Card>
    </div>

    

    </Card>
      

    </>
  );
}
