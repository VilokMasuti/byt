'use server'

import { z } from 'zod'

const schema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(1, 'Message is required'),
})

export async function sendContactForm(formData: z.infer<typeof schema>) {
  const result = schema.safeParse(formData)

  if (!result.success) {
    throw new Error('Invalid form data')
  }

  // Here you would typically send an email or save to a database
  // For this example, we'll just simulate a delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  return {
    message: 'Thank you for your message. We will get back to you soon!',
  }
}
