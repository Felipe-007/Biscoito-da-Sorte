import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

function App() {

  const [biscoito, setBiscoito] = useState(require('./src/biscoito.png'));
  const [alterarTexto, setAlterarTexto] = useState('');

  let frases = [  //cria um array em JS
    'Siga os bons e aprenda com eles.',
    'O bom-senso vale mais do que muito conhecimento.',
    'O riso é a menor distância entre duas pessoas.',
    'Deixe de lado as preocupações e seja feliz.',
    'Realize o óbvio, pense no improvável e conquiste o impossível.',
    'Acredite em milagres, mas não dependa deles.',
    'A maior barreira para o sucesso é o medo do fracasso.'
  ];

  function quebraBiscoito() {
    let numeroAleatorio = Math.floor(Math.random() * frases.length) //pega um número aleatório

    setAlterarTexto(frases[numeroAleatorio])  // faz o setAlterarTexto receber o numeroAleatorio de frases

    setBiscoito(require('./src/biscoitoAberto.png'));    
    }

    function reiniciar(){
      setBiscoito(require('./src/biscoito.png'));
      setAlterarTexto('');
  }

  return (
    <View style={styles.container}>

      <Image
        source={biscoito}
        style={styles.imagem}
      />

      <Text style={styles.textofrase}>{alterarTexto}</Text>

      <TouchableOpacity style={styles.botao} onPress={quebraBiscoito}>
        <View style={styles.btnArea}>
          <Text style={styles.btnTexto}>Quebrar Biscoito</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.botao, styles.btnquebrar]} onPress={ reiniciar }>
        <View style={styles.btnArea}>
          <Text style={[styles.btnTexto, styles.textoquebrar]}>Reiniciar Biscoito</Text>
        </View>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imagem: {
    width: 230,
    height: 230,
  },
  textofrase: {
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  botao: {
    width: 230,
    height: 50,
    borderColor: '#dd7b22',
    borderWidth: 2,
    borderRadius: 25,
  },
  btnArea: {
    flex: 1,  // faz com que preencha todo o espaço disponível
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnTexto: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#dd7b22',
  },
  btnquebrar: {
    marginTop: 15,
    borderColor: '#121212'
  },
  textoquebrar: {
    color: '#121212'
  },
})

export default App;