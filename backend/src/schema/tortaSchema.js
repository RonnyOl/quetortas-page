import z from 'zod'

 const tortaSchema = z.object({
    title: z.string({required_error: "Title is required"}),
    price: z.number({required_error: "Title is required"}).int(),
    favlor: z.string()
})

export function validateTorta (object){
    return tortaSchema.safeParse(object)
}
export function validatePartialTorta (object){
    return tortaSchema.partial().safeParse(object)
}