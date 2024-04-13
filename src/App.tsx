import { FlatList, Pressable, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Snackbar from 'react-native-snackbar'
import Icons from './components/icons'

export default function App(): JSX.Element {
  const [gameWinner, setGameWinner] = useState<string>('')
  const [isCross, setIsCross] = useState<boolean>(false)
  const [gameState, setGameState] = useState(new Array(9).fill('empty', 0, 9))

  const checkIsWinner = () => {
    if(gameState[0] == gameState[1] && 
      gameState[1] == gameState[2] &&
      gameState[0] != 'empty'
    ){setGameWinner(`${gameState[0]} won the game ! 🥳`)}
    else if(gameState[3] == gameState[4] &&
      gameState[4] == gameState[5] &&
      gameState[3] != 'empty'
    ){setGameWinner(`${gameState[3]} won the game ! 🥳`)}
    else if(gameState[6] == gameState[7] &&
      gameState[7] == gameState[8] &&
      gameState[6] != 'empty'
    ){setGameWinner(`${gameState[6]} won the game ! 🥳`)}
    else if(
      gameState[0] == gameState[3] &&
      gameState[3] == gameState[6] &&
      gameState[0] != 'empty'
    ){setGameWinner(`${gameState[0]} won the game ! 🥳`)}
    else if(gameState[1] == gameState[4] &&
      gameState[4] == gameState[7] &&
      gameState[1] != 'empty'
    ){setGameWinner(`${gameState[1]} won the game ! 🥳`)}
    else if(gameState[2] == gameState[5] &&
      gameState[5] == gameState[8] &&
      gameState[2] != 'empty'
    ){setGameWinner(`${gameState[2]} won the game ! 🥳`)}
    else if(gameState[0] == gameState[4] &&
      gameState[4] == gameState[8] &&
      gameState[0] != 'empty'
    ){setGameWinner(`${gameState[0]} won the game ! 🥳`)}
    else if(gameState[2] == gameState[4] &&
      gameState[4] == gameState[6] &&
      gameState[2] != 'empty'
    ){setGameWinner(`${gameState[2]} won the game ! 🥳`)}
    else if(!gameState.includes('empty',0)){
      setGameWinner('Game is a draw ! 😐')
    }
  }
  const reloadGame = () => {
    setGameState(new Array(9).fill('empty', 0, 9))
    setIsCross(false)
    setGameWinner('')
  }
  const changeItem = (itemNumber : number) => {
    if(gameWinner){
      return Snackbar.show({
        text : gameWinner,
        backgroundColor : '#000',
        textColor : '#FFF'
      })
    }
    if (gameState[itemNumber] === 'empty') {
      gameState[itemNumber] = isCross ? 'cross' : 'circle';
      setIsCross(!isCross);
    } else {
      return Snackbar.show({
        text: 'Already filled',
        backgroundColor: '#000',
        textColor: '#FFF',
      });
    }
    checkIsWinner();
  }
  return (
    <SafeAreaView>
      <StatusBar />
      {gameWinner ? (
        <View style={[styles.playerInfo, styles.winnerInfo]}>
          <Text style={styles.winnerTxt}>{gameWinner}</Text>
        </View>
      ) : (
        <View style={[
          styles.playerInfo,
          isCross ? styles.playerX : styles.playerO,
        ]}>
          <Text style={styles.gameTurnTxt}>
            {isCross ? 'X' : 'O'}'s Turn
          </Text>
        </View>
      )}
      {/* gameGrid : 9 cells */}
      <FlatList 
        numColumns={3}
        data = {gameState}
        style={styles.grid}
        renderItem={({item, index}) => (
          <Pressable
            style={styles.card}
            key = {index}
            onPress={() => changeItem(index)}
          >
            <Icons name={item} />
          </Pressable>
        )}
      />
      <Pressable
        onPress={reloadGame}
        style={styles.gameBtn}
      >
        <Text style={styles.gameBtnText}>
          {gameWinner ? 'Start new game' : 'reLoad the game'}
        </Text>
      </Pressable>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5', // Change to your desired background color
  },
  playerInfo: {
    height: 56,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    paddingVertical: 8,
    marginVertical: 12,
    marginHorizontal: 14,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
  },
  gameTurnTxt: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  playerX: {
    backgroundColor: '#38CC77',
  },
  playerO: {
    backgroundColor: '#F7CD2E',
  },
  grid: {
    margin: 12,
    marginLeft: 44,
  },
  card: {
    height: 100,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 8, // Add border radius
    margin: 4,
  },
  winnerInfo: {
    borderRadius: 8,
    backgroundColor: '#38CC77',
    shadowOpacity: 0.1,
  },
  winnerTxt: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: '600',
    textTransform: 'capitalize',
  },
  gameBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    borderRadius: 8,
    marginHorizontal: 36,
    backgroundColor: '#8D3DAF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  gameBtnText: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: '600',
  },
})
