"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Github, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export default function Home() {
  const [currentPage, setCurrentPage] = useState(0)
  const [direction, setDirection] = useState(0)

  const goToPage = (pageIndex: number) => {
    setDirection(pageIndex > currentPage ? 1 : -1)
    setCurrentPage(pageIndex)
  }

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  const products = [
    {
      title: "Minimalist Desk Lamp",
      description: "A sleek, adjustable desk lamp with touch controls and multiple light temperatures.",
      price: "$89.99",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Geometric Bookshelf",
      description: "Modern geometric bookshelf with an asymmetrical design that creates visual interest.",
      price: "$249.99",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Living Space Concept",
      description: "A holistic approach to living spaces that combines functionality, aesthetics, and sustainability.",
      price: "Custom Quote",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white py-4 shadow-sm">
        <div className="container mx-auto flex justify-center gap-4">
          <Button
            variant={currentPage === 0 ? "default" : "outline"}
            size="sm"
            onClick={() => goToPage(0)}
            className="rounded-full px-6"
          >
            Welcome
          </Button>
          <Button
            variant={currentPage === 1 ? "default" : "outline"}
            size="sm"
            onClick={() => goToPage(1)}
            className="rounded-full px-6"
          >
            Products
          </Button>
          <Button
            variant={currentPage === 2 ? "default" : "outline"}
            size="sm"
            onClick={() => goToPage(2)}
            className="rounded-full px-6"
          >
            Contact
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentPage}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "tween", duration: 0.5 }}
            className="h-full w-full"
          >
            {currentPage === 0 && (
              <section className="container mx-auto flex min-h-[calc(100vh-12rem)] flex-col items-center justify-center px-4 py-12 text-center">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                  <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-6xl">
                    Welcome to <span className="text-primary">Design Studio</span>
                  </h1>
                  <p className="mx-auto mb-8 max-w-2xl text-xl text-muted-foreground">
                    We create beautiful, functional designs that enhance your everyday life. Explore our products and
                    concepts to transform your space.
                  </p>
                  <Button onClick={() => goToPage(1)} size="lg" className="rounded-full px-8">
                    Explore Our Products
                  </Button>
                </motion.div>
              </section>
            )}

            {currentPage === 1 && (
              <section className="container mx-auto px-4 py-12">
                <h2 className="mb-12 text-center text-3xl font-bold tracking-tight md:text-4xl">Our Products</h2>
                <div className="grid gap-8 md:grid-cols-3">
                  {products.map((product, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 + 0.2 }}
                    >
                      <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-lg">
                        <CardHeader className="p-0">
                          <div className="relative h-48 w-full overflow-hidden">
                            <Image
                              src={product.image || "/placeholder.svg"}
                              alt={product.title}
                              fill
                              className="object-cover transition-transform duration-300 hover:scale-105"
                            />
                          </div>
                        </CardHeader>
                        <CardContent className="p-6">
                          <CardTitle className="mb-2">{product.title}</CardTitle>
                          <CardDescription className="mb-4">{product.description}</CardDescription>
                          <div className="text-lg font-bold text-primary">{product.price}</div>
                        </CardContent>
                        <CardFooter className="border-t bg-muted/50 px-6 py-3">
                          <Button variant="outline" className="w-full">
                            View Details
                          </Button>
                        </CardFooter>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </section>
            )}

            {currentPage === 2 && (
              <section className="container mx-auto px-4 py-12">
                <div className="mx-auto max-w-4xl">
                  <h2 className="mb-12 text-center text-3xl font-bold tracking-tight md:text-4xl">Contact Us</h2>

                  <div className="mb-12 rounded-xl bg-muted p-8">
                    <h3 className="mb-4 text-2xl font-bold">Our Story</h3>
                    <p className="mb-6 text-muted-foreground">
                      Founded in 2018, our design studio has been creating innovative and functional designs that blend
                      aesthetics with practicality. We believe that good design should enhance everyday life while being
                      accessible to everyone.
                    </p>

                    <h3 className="mb-4 text-2xl font-bold">Past Projects</h3>
                    <p className="mb-6 text-muted-foreground">
                      We've worked with clients ranging from small startups to established brands, helping them create
                      unique design identities and functional products. Our portfolio includes furniture design,
                      interior concepts, and product development.
                    </p>

                    <h3 className="mb-4 text-2xl font-bold">Technologies & Materials</h3>
                    <p className="text-muted-foreground">
                      We utilize sustainable materials and cutting-edge manufacturing techniques to ensure our designs
                      are both environmentally responsible and built to last. From 3D printing prototypes to working
                      with local craftspeople, we embrace both traditional and modern approaches.
                    </p>
                  </div>

                  <div className="flex justify-center space-x-6">
                    <Button variant="outline" size="icon" className="h-12 w-12 rounded-full">
                      <Twitter className="h-5 w-5" />
                      <span className="sr-only">Twitter</span>
                    </Button>
                    <Button variant="outline" size="icon" className="h-12 w-12 rounded-full">
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                    <Button variant="outline" size="icon" className="h-12 w-12 rounded-full">
                      <Github className="h-5 w-5" />
                      <span className="sr-only">GitHub</span>
                    </Button>
                  </div>
                </div>
              </section>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <div className="container mx-auto px-4">
          <div className="fixed bottom-24 left-0 right-0 flex justify-between px-4 md:px-12">
            <Button
              variant="outline"
              size="icon"
              className="h-12 w-12 rounded-full bg-background/80 backdrop-blur-sm"
              onClick={() => {
                if (currentPage > 0) {
                  goToPage(currentPage - 1)
                }
              }}
              disabled={currentPage === 0}
            >
              <ChevronLeft className="h-6 w-6" />
              <span className="sr-only">Previous</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="h-12 w-12 rounded-full bg-background/80 backdrop-blur-sm"
              onClick={() => {
                if (currentPage < 2) {
                  goToPage(currentPage + 1)
                }
              }}
              disabled={currentPage === 2}
            >
              <ChevronRight className="h-6 w-6" />
              <span className="sr-only">Next</span>
            </Button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t bg-muted/30 py-6">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Design Studio. All rights reserved. Created with ♥ by Creative Team.
        </div>
      </footer>
    </div>
  )
}
