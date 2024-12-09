'use client'

import { useState } from 'react'
import { sendContactForm } from '../actions/contactAction'

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [errors, setErrors] = useState<{ [key: string]: string }>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitResult, setSubmitResult] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrors({})
    setSubmitResult(null)

    const validationErrors: { [key: string]: string } = {}
    if (!formState.name.trim()) validationErrors.name = 'Name is required'
    if (!formState.email.trim()) validationErrors.email = 'Email is required'
    if (!/\S+@\S+\.\S+/.test(formState.email))
      validationErrors.email = 'Email is invalid'
    if (!formState.message.trim())
      validationErrors.message = 'Message is required'

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      setIsSubmitting(false)
      return
    }

    try {
      const result = await sendContactForm(formState)
      setSubmitResult(result.message)
      setFormState({ name: '', email: '', message: '' })
    } catch (error) {
      console.log(error)

      setSubmitResult('An error occurred. Please try again.')
    }

    setIsSubmitting(false)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1">
          Name
        </label>
        <input
          type="text"
          id="name"
          value={formState.name}
          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
          className="w-full p-2 border rounded-md"
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name}</p>
        )}
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={formState.email}
          onChange={(e) =>
            setFormState({ ...formState, email: e.target.value })
          }
          className="w-full p-2 border rounded-md"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email}</p>
        )}
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1">
          Message
        </label>
        <textarea
          id="message"
          value={formState.message}
          onChange={(e) =>
            setFormState({ ...formState, message: e.target.value })
          }
          className="w-full p-2 border rounded-md"
          rows={4}
        ></textarea>
        {errors.message && (
          <p className="text-red-500 text-sm mt-1">{errors.message}</p>
        )}
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary text-primary-foreground py-2 rounded-md hover:bg-primary/90 transition-colors animate-scale"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
      {submitResult && (
        <p className="text-center text-green-500 mt-4 animate-fade-in">
          {submitResult}
        </p>
      )}
    </form>
  )
}
