import { Image, Text, View, Modal, TouchableOpacity, StyleSheet, Linking, ScrollView } from "react-native";
import Button from "../components/button";
import React, { useState } from "react";
import { Props, RootStackParamList } from '../types/route.types';
import Icon from 'react-native-vector-icons/FontAwesome'; // Use FontAwesome para os ícones
import me from "../../assets/me.jpeg"

const Home: React.FC<Props> = ({ navigation }) => {
  const [showModal, setShowModal] = useState(false);

  const navigate = (to: keyof RootStackParamList) => {
    navigation.navigate(to);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const openURL = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView>
        <View style={styles.container}> 
            
      <View>
        <Image source={me} style={{ width: 100, height: 100, margin:30 }} />
      </View>
      <View>
        <View style={{marginBottom:10, padding:10}}><Text>Sou uma desenvolvedora full-stack apaixonada por criar soluções web e mobile que atendam às necessidades dos usuários e dos clientes. Tenho experiência em trabalhar com diversas tecnologias, como Python, Node.js, React, HTML5, CSS, Flask, Django, PSQL, MySQL e MongoDB, e em desenvolver projetos do front-end ao back-end, com foco na qualidade, performance e segurança do código.
        </Text></View>
        <View style={{marginBottom:10, padding:10}}><Text>Atualmente, estou cursando o bacharelado em Ciência da Computação na Universidade Cruzeiro do Sul, e sou formada em Engenharia de Software pela Kenzie Academy Brasil, onde obtive as certificações de desenvolvedora front-end, back-end e full-stack. Em minha última experiência profissional, atuei como desenvolvedora web na smartXet Solutions, uma empresa de tecnologia que oferece soluções inovadoras para diversos setores. Nessa função, participei de projetos desafiadores, como o desenvolvimento de uma plataforma de e-commerce para um grande cliente do ramo de moda, e de um aplicativo de delivery para um restaurante local. Além disso, colaborei com uma equipe multidisciplinar, utilizando metodologias ágeis, ferramentas de versionamento e testes automatizados. Meu objetivo é continuar aprimorando minhas habilidades e conhecimentos, e contribuir para o desenvolvimento de produtos digitais que gerem valor e impacto positivo para a sociedade.</Text></View>
      </View>
      <View>
        <Button onTouch={() => navigate("skills")} children="Ir para habilidades" />
      </View>
      
      <Button onTouch={toggleModal} children="Minhas redes"></Button>

      <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}
        onRequestClose={toggleModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Minhas redes</Text>

            <View style={styles.iconsContainer}>
              <TouchableOpacity onPress={() => openURL('https://www.linkedin.com/in/priccila-lucem/')}>
                <Icon name="linkedin" size={40} color="#0077B5" style={styles.icon} />
                <Text>LinkedIn</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => openURL('https://github.com/PriccilaLucem')}>
                <Icon name="github" size={40} color="#000" style={styles.icon} />
                <Text>GitHub</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => openURL('https://docs.google.com/document/d/1aUoj8FrR2h3H3MsP0vdU-9xCQ2XpT6rS/edit?usp=sharing&ouid=116951424682074915558&rtpof=true&sd=true')}>
                <Icon name="file-text" size={40} color="#000" style={styles.icon} />
                <Text>Currículo</Text>
              </TouchableOpacity>
            </View>

            <Button onTouch={toggleModal} children="Fechar" />
          </View>
        </View>
      </Modal>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 300,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
    width: '100%',
  },
  icon: {
    marginBottom: 5,
    alignSelf: 'center',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});
