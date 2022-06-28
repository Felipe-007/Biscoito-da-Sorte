import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { styles } from "./src/Home/styles";

export default function App() {

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