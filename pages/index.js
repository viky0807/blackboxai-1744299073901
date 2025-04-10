import { useState, useEffect } from 'react'
import Head from 'next/head'
import { ethers } from 'ethers'
import ChatInterface from '../components/ChatInterface'

export default function Home() {
  const [connected, setConnected] = useState(false)
  const [account, setAccount] = useState('')
  const [provider, setProvider] = useState(null)

  const connectWallet = async () => {
    try {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
        setAccount(accounts[0])
        setConnected(true)
        setProvider(new ethers.providers.Web3Provider(window.ethereum))
      } else {
        alert('Please install MetaMask!')
      }
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on('accountsChanged', (accounts) => {
        setAccount(accounts[0] || '')
        setConnected(!!accounts[0])
      })
    }
  }, [])

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Web3 Chat App</title>
        <meta name="description" content="Decentralized chat application" />
      </Head>

      <main className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Web3 Chat</h1>
        
        {!connected ? (
          <button 
            onClick={connectWallet}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg mx-auto block"
          >
            Connect Wallet
          </button>
        ) : (
          <div className="max-w-md mx-auto">
            <p className="text-center mb-4">Connected: {account.substring(0, 6)}...{account.substring(38)}</p>
            <ChatInterface />
          </div>
        )}
      </main>
    </div>
  )
}
