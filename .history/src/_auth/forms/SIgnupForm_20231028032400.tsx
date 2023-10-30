import { Button } from "@/components/ui/button"

import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"


const formSchema = z.object({
    username: z.string().min(2).max(50),
})

const SignupForm = () => {

    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
        },
    })


    return (
        <div>
            <Button>Click me</Button>

        </div>
    )
}

export default SignupForm
