import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface FloatingElementsProps {
  className?: string
  count?: number
  variant?: 'circles' | 'squares' | 'hexagons' | 'mixed'
  theme?: 'primary' | 'surroundai' | 'datacoffee' | 'seismic' | 'finance' | 'healthcare' | 'government' | 'retail'
}

const FloatingElements: React.FC<FloatingElementsProps> = ({ 
  className, 
  count = 6, 
  variant = 'mixed',
  theme = 'primary'
}) => {
  const getThemeColors = () => {
    const themes = {
      primary: ['hsl(var(--accent-purple))', 'hsl(var(--accent-blue))'],
      surroundai: ['hsl(var(--surroundai-primary))', 'hsl(var(--surroundai-secondary))'],
      datacoffee: ['hsl(var(--datacoffee-primary))', 'hsl(var(--datacoffee-secondary))'],
      seismic: ['hsl(var(--seismic-primary))', 'hsl(var(--seismic-secondary))'],
      finance: ['hsl(var(--finance-primary))', 'hsl(var(--finance-secondary))'],
      healthcare: ['hsl(var(--healthcare-primary))', 'hsl(var(--healthcare-secondary))'],
      government: ['hsl(var(--government-primary))', 'hsl(var(--government-secondary))'],
      retail: ['hsl(var(--retail-primary))', 'hsl(var(--retail-secondary))']
    }
    return themes[theme]
  }

  const getShape = (index: number) => {
    if (variant === 'circles') return 'rounded-full'
    if (variant === 'squares') return 'rounded-lg'
    if (variant === 'hexagons') return 'rounded-lg rotate-45'
    
    // Mixed variant
    const shapes = ['rounded-full', 'rounded-lg', 'rounded-lg rotate-45']
    return shapes[index % 3]
  }

  const colors = getThemeColors()
  const elements = Array.from({ length: count }, (_, i) => i)

  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      {elements.map((index) => (
        <motion.div
          key={index}
          className={cn(
            "absolute opacity-20",
            getShape(index)
          )}
          style={{
            width: Math.random() * 100 + 20,
            height: Math.random() * 100 + 20,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: `linear-gradient(135deg, ${colors[0]}, ${colors[1]})`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  )
}

export { FloatingElements }