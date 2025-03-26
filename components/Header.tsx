'use client'

import { useLocale, useTranslations } from 'next-intl'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { startTransition, useEffect, useState } from 'react'

const LANGUAGES = [
	{ code: 'en', name: 'English (Английский)', flag: '/EN.svg' },
	{ code: 'ru', name: 'Russian (Русский)', flag: '/RU.svg' },
]

export const Header = () => {
	const [selectedLanguage, setSelectedLanguage] = useState(LANGUAGES[0])
	const [isOpen, setIsOpen] = useState(false)
	const tComponents = useTranslations('Components')
	const router = useRouter()
	const pathname = usePathname()
	const localActive = useLocale()

	useEffect(() => {
		const newLang =
			LANGUAGES.find(lang => lang.code === localActive) || LANGUAGES[0]
		setSelectedLanguage(newLang)
	}, [localActive])

	const changeLanguage = (nextLocale: string) => {
		startTransition(() => {
			const newPath = `/${nextLocale}${pathname.replace(`/${localActive}`, '')}`
			router.replace(newPath)
			setIsOpen(false)
		})
	}

	return (
		<header className='flex px-2 items-center py-2 justify-between'>
			<Image src='/Logo.svg' width={130} height={70} alt='logo'></Image>

			<div className='flex items-center gap-2'>
				<div className='relative'>
					<Image
						src={selectedLanguage.flag}
						width={25}
						height={25}
						alt='logo'
						onClick={() => setIsOpen(!isOpen)}
						className='cursor-pointer'
					/>

					{/* Выпадающий список языков */}
					{isOpen && (
						<div className='absolute -left-10 mt-2 w-44 bg-[#f3f4f7] border-x-[0.3px] border-b-[0.3px] border-[#aaaaab] rounded-b-[20px] px-2 py-1.5 z-10'>
							{LANGUAGES.map(lang => (
								<div
									key={lang.code}
									className='flex items-center gap-2 py-1 cursor-pointer hover:bg-gray-100 not-last:border-b-[0.2px] not-last:border-[#aaaaab]'
									onClick={() => changeLanguage(lang.code)}
								>
									<Image
										src={lang.flag}
										width={15}
										height={15}
										alt={lang.name}
									/>
									<span className='text-[13px] text-black'>{lang.name}</span>
								</div>
							))}
						</div>
					)}
				</div>

				<div className='px-2.5 flex gap-2'>
					<p>{tComponents('login')}</p>
					<div className='flex gap-1'>
						<Image src='/VK.svg' width={16} height={16} alt='logo'></Image>
						<Image src='/Google.svg' width={16} height={16} alt='logo'></Image>
					</div>
				</div>
			</div>
		</header>
	)
}
