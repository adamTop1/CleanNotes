'use client'

import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '../../../components/ui/checkbox'
import { OnSubmitAction } from './OnSubmitAction'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

export const formSchema = z.object({
	title: z.string().min(2).max(50),
	description: z.string().min(2),
	isFavorite: z.boolean(),
	category: z.enum(['PERSONAL', 'WORK', 'SHOPPING', 'OTHER']),
})

export default function CreateNoteForm() {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			title: '',
			description: '',
			isFavorite: false,
			category: 'PERSONAL',
		},
	})

	async function onSubmit(data: z.infer<typeof formSchema>) {
		await OnSubmitAction(data)
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className='w-8/12 mt-20 space-y-8'>
				<FormField
					control={form.control}
					name='title'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Title</FormLabel>
							<FormControl>
								<Input placeholder='type here title...' {...field} className='bg-zinc-800' />
							</FormControl>
							<FormDescription>This is your public display name.</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='description'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Description</FormLabel>
							<FormControl>
								<Textarea placeholder='type here description...' {...field} className='bg-zinc-800' />
							</FormControl>
							<FormDescription>This is your public display name.</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='isFavorite'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Favorite</FormLabel>
							<FormControl>
								<div className='flex items-center space-x-2'>
									<Checkbox
										id='terms'
										className='border-white'
										checked={field.value}
										onCheckedChange={field.onChange}
									/>
									<label
										htmlFor='terms'
										className='text-sm font-medium leading-none text-zinc-500 peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
										Make as favorite note
									</label>
								</div>
							</FormControl>
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='category'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Category</FormLabel>
							<FormControl>
								<Select onValueChange={field.onChange} defaultValue={field.value} > 
									<SelectTrigger className='w-[180px] bg-zinc-800 text-white'>
										<SelectValue placeholder='Category ' />
									</SelectTrigger>
									<SelectContent className='text-white bg-zinc-800 '>
										<SelectItem value='PERSONAL'>Personal</SelectItem>
										<SelectItem value='WORK'>Work</SelectItem>
										<SelectItem value='SHOPPING'>Shopping</SelectItem>
										<SelectItem value='OTHER'>Other</SelectItem>
									</SelectContent>
								</Select>
							</FormControl>
						</FormItem>
					)}
				/>
				<Button type='submit'>Submit</Button>
			</form>
		</Form>
	)
}
