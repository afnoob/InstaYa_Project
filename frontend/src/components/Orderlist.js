import Table from 'react-bootstrap/Table';
import './Orderlist.css'

function Orderlist() {
  return (
    <div className='list'>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th># Servicio</th>
          <th>Fecha</th>
          <th>Ciudad Entrega</th>
          <th>Dirección Entrega</th>
          <th>Estado</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>20/09/2022</td>
          <td>Barranquilla</td>
          <td>Calle 18 # 45-6</td>
          <td>Guardado</td>
        </tr>
        <tr>
          <td>2</td>
          <td>21/09/2022</td>
          <td>Bogotá</td>
          <td>Calle 132 # 7-56</td>
          <td>Cancelado</td>
        </tr>
        <tr>
          <td>3</td>
          <td>22/09/2022</td>
          <td>Santa Marta</td>
          <td>Carrera 6 # 19-22</td>
          <td>Cumplido</td>
        </tr>
      </tbody>
    </Table>
    </div>
    
  );
}

export default Orderlist;