import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'
import { getAssetPath } from '@/lib/utils'

const algorithms = [
  {
    id: 'pathfinder',
    title: "Pathfinder",
    description: "Visualize graph algorithms like Dijkstra, BFS, DFS.",
    image: 'images/graph.png?height=200&width=300'
  },
  {
    id: 'recursion-tree',
    title: 'Recursion Tree',
    description: "The process in which a function calls itself directly or indirectly is called recursion.",
    image: 'images/recursion.png?height=200&width=300'
  },
   {
    id: 'sorting',
    title: 'Sorting Algorithm',
    description: "Sorting Algorithms - Bubble Sort, Selection Sort, Insertion Sort, Quick Sort.",
    image: 'images/sortt.png?height=200&width=300'
  },
  {
    id: 'recursive-sorting',
    title: 'Recursive Sorting',
    description: "Recursive Sorting Algorithms - Merge Sort, Heap Sort, Quick Sort.",
    image: 'images/sortr.webp?height=200&width=300'
  },
  {
    id: 'n-queen',
    title: 'N Queen',
    description: "The N queens puzzle is the problem of placing N chess queens on an N*N chessboard so that no two queens threaten each other.",
    image: 'images/queen.PNG?height=200&width=300'
  },

  {
    id: 'prime-numbers',
    title: 'Prime Numbers',
    description: "Visualize how Sieve of Eratosthenes is better than brute force.",
    image: 'images/primes.png?height=200&width=300'
  },

  {
    id: 'binary-search',
    title: 'Binary Search',
    description: "Binary search is an efficient algorithm for finding an item from a sorted list of item.",
    image: 'images/binary-search.png?height=200&width=300'
  }
];

export function AlgorithmCards() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {algorithms.map((algorithm) => (
        <Link key={algorithm.id} href={`/${algorithm.id}`} className="block group">
          <Card className="overflow-hidden transition-shadow hover:shadow-lg h-full flex flex-col">
            <div className="relative h-48">
              <Image
                src={getAssetPath(algorithm.image)}
                alt={algorithm.title}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <CardHeader className="flex-grow">
              <CardTitle className="text-2xl group-hover:text-primary transition-colors duration-300">
                {algorithm.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col justify-between">
              <p className="text-lg text-muted-foreground">{algorithm.description}</p>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}