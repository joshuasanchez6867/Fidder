import { Container, Row, Col } from 'react-bootstrap';
import styles from './Pantry.module.css';
//import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
const Pantry: React.FC<{}> =  () => {
    return(
    <Container fluid>
      <Row>
        <Col className={styles['col-4']} sm={4}>
            <header className={styles['header-block']} >
               <div className={styles['head-navigation']} >
                <div className={styles['head-nav-center']}>
                    <h1 className={styles['head-title']}>Pantry</h1>
                    <div className={styles['head-sub-title']}>You have 0 ingredients</div>
                </div>
                <div className={styles['head-nav-right']}></div>
                </div> 
                <div className={styles['search-bar wrap w-form']} >

                </div>
            </header>
        </Col>
        <Col className={styles['col-8']} sm={8}>sm=8</Col>
      </Row>
    </Container>
    );

}

export default Pantry; 