import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import GridBack from "../Layout/GridBackground";
import Tooltip from '../ui-components/Tooltip'; // Certifique-se de que o caminho está correto

// Exemplos de código para cada linguagem
const codeSnippets = {
  python: `import asyncio
import aiohttp
from bs4 import BeautifulSoup

async def fetch(session, url):
    async with session.get(url) as response:
        return await response.text()

async def scrape(urls):
    async with aiohttp.ClientSession() as session:
        tasks = [fetch(session, url) for url in urls]
        pages = await asyncio.gather(*tasks)
        for i, page in enumerate(pages):
            soup = BeautifulSoup(page, 'html.parser')
            title = soup.title.string if soup.title else 'No Title'
            print(f"Page {i + 1}: {title}")

urls = [
    'https://example.com',
    'https://example.org',
    'https://example.net',
]

asyncio.run(scrape(urls))
`,
  java: `import java.util.concurrent.*;

public class MultiThreadingExample {
    public static void main(String[] args) throws InterruptedException, ExecutionException {
        ExecutorService executor = Executors.newFixedThreadPool(3);
        Callable<String> task = () -> {
            Thread.sleep(1000);
            return "Task Completed!";
        };
        
        Future<String> future = executor.submit(task);
        System.out.println("Task is executing...");
        System.out.println(future.get());  // This will wait until the task is done
        
        executor.shutdown();
    }
}
`,
  csharp: `using System;
using System.Collections.Generic;
using System.Linq;

class Program
{
    static void Main()
    {
        List<Person> people = new List<Person>
        {
            new Person("Alice", 30),
            new Person("Bob", 25),
            new Person("Charlie", 35)
        };

        var result = people
            .Where(p => p.Age > 25)
            .Select(p => new { p.Name, IsAdult = p.Age >= 18 })
            .ToList();

        result.ForEach(p => Console.WriteLine($"{p.Name} is an adult: {p.IsAdult}"));
    }
}

class Person
{
    public string Name { get; }
    public int Age { get; }

    public Person(string name, int age)
    {
        Name = name;
        Age = age;
    }
}
`,
  node: `const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const itemSchema = new mongoose.Schema({ name: String });
const Item = mongoose.model('Item', itemSchema);

// Create Item
app.post('/items', async (req, res) => {
  const item = new Item(req.body);
  await item.save();
  res.status(201).send(item);
});

// Read Items
app.get('/items', async (req, res) => {
  const items = await Item.find();
  res.send(items);
});

// Update Item
app.put('/items/:id', async (req, res) => {
  const item = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(item);
});

// Delete Item
app.delete('/items/:id', async (req, res) => {
  await Item.findByIdAndDelete(req.params.id);
  res.status(204).send();
});

app.listen(3000, () => console.log('Server running on port 3000'));
`,
  react: `import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ title, description }) => {
  return (
    <motion.div
      className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg"
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-gray-700">{description}</p>
    </motion.div>
  );
};

export default function App() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <Card 
        title="Awesome Card" 
        description="This is an animated card using Framer Motion in React.js." 
      />
    </div>
  );
}
`,
};

function CodeTabs() {
  const [selectedTab, setSelectedTab] = useState('node');

  const tabOptions = [
    
    { label: 'Python', value: 'python' },
    { label: 'Java', value: 'java' },
    { label: 'C#', value: 'csharp' },
    { label: 'Node.js', value: 'node' },
    { label: 'React.js', value: 'react' },
  ];

  const handleQuickstart = () => {
    window.location.href = 'https://devdocs.io/'; // Substitua pelo URL da sua documentação
  };

  return (
    <div className="relative"> {/* Torna o conteúdo posicionado em relação ao fundo */}
      <GridBack /> {/* Adiciona o GridBack como fundo */}
      
      <div className="flex items-center justify-center bg-gradient-to-r py-12 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white shadow-lg overflow-hidden max-w-4xl w-full flex flex-col lg:flex-row">
          {/* Área de código à esquerda */}
          <div className="lg:w-2/3 w-full p-6 bg-gray-900">
            {/* Menu de abas */}
            <div className="flex space-x-4 mb-6 overflow-x-auto">
              {tabOptions.map((tab) => (
                <button
                  key={tab.value}
                  className={`px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                    selectedTab === tab.value
                      ? 'bg-primary text-white shadow-md'
                      : 'bg-white text-black hover:bg-black hover:text-white'
                  }`}
                  onClick={() => setSelectedTab(tab.value)}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Área do código */}
            <div className="p-4 h-80 overflow-auto scrollbar-thin scrollbar-thumb-indigo-600 scrollbar-track-gray-700">
              <SyntaxHighlighter
                language={
                  selectedTab === 'node' || selectedTab === 'react' ? 'javascript' : selectedTab
                }
                style={vscDarkPlus}
                customStyle={{ fontSize: '0.9rem', borderRadius: '0.5rem' }}
              >
                {codeSnippets[selectedTab]}
              </SyntaxHighlighter>
            </div>
          </div>

          {/* Descrição e Quickstart à direita */}
          <div className="lg:w-1/3 w-full p-6 bg-white flex flex-col justify-center text-center">
            <h1 className="text-2xl font-bold text-black mb-4"><span className='text-primary'>Inicie aqui</span> escale seu conhecimento.</h1> 
            <p className="text-third mb-6">Se assegure de aprender aplicações diariamente.</p> 
            <button
              className="px-6 py-3 bg-primary text-white text-sm font-semibold shadow-md hover:bg-secondary transition-all duration-300"
              onClick={handleQuickstart}
            >
              Guia de início rápido para {tabOptions.find((tab) => tab.value === selectedTab).label} ➔
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CodeTabs;
