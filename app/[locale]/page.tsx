'use client'
import { CustomNotification } from '@/components/CustomNotification'
import PromotionSlider from '@/components/PromotionSlider'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import { useState } from 'react'

export default function Home() {
	const [search, setSearch] = useState('')
	const [showNotification, setShowNotification] = useState(false)
	const tHome = useTranslations('Home')
	const tComponents = useTranslations('Components')
	const searchParams = useSearchParams()
	const verified = searchParams.get('verified')

	if (verified === 'true' && !showNotification) {
		setShowNotification(true)
	}

	const handleCloseNotification = () => {
		setShowNotification(false)
		window.history.replaceState({}, document.title, '/')
	}

	return (
		<>
			<div className='mt-3 mb-7'>
				<input
					type='text'
					placeholder={tComponents('placeholder')}
					className='border-0 rounded-[12px] p-[8px] w-full h-[40px] bg-[#f3f4f7] transition-all'
					value={search}
					onChange={e => setSearch(e.target.value)}
				/>
				<PromotionSlider />

				<div className='mt-7'>
					<div className='flex gap-3'>
						<svg
							width='16'
							height='16'
							viewBox='0 0 16 16'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M10.158 13.4436C12.3435 13.6647 13.5063 12.5889 14.0947 9.92907L14.7812 6.8492C15.4676 3.76933 14.571 2.24414 11.636 1.52206L10.4662 1.23471C8.12666 0.652626 6.73271 1.13155 5.91315 2.91463M10.158 13.4436C9.8078 13.4142 9.42954 13.3479 9.02327 13.2447L7.84647 12.95C4.92548 12.2205 4.02186 10.7027 4.70833 7.62285L5.3948 4.53562C5.53489 3.90933 5.70301 3.36409 5.91315 2.91463M10.158 13.4436C9.72374 13.7531 9.17737 14.011 8.51192 14.2394L7.40517 14.6225C4.62427 15.5657 3.16028 14.7773 2.25666 11.8521L1.36005 8.94174C0.463444 6.0166 1.20595 4.4693 3.98684 3.52618L5.09359 3.14304C5.38079 3.04726 5.65397 2.96621 5.91315 2.91463M8.46288 5.44189L11.8602 6.34817M7.77642 8.29335L9.8078 8.83859'
								stroke='#F03D00'
								stroke-width='1.2'
								stroke-linecap='round'
								stroke-linejoin='round'
							/>
						</svg>
						<h3
							className='font-bold text-[14px] leading-[120%] text-[#212529]'
							style={{ fontFamily: 'var(--font3)' }}
						>
							{tHome('titles.services')}
						</h3>
					</div>

					<div className='grid grid-cols-2 gap-3 mt-3 place-items-center'>
						{[1, 2].map((el, i) => (
							<div key={i} className='flex justify-center'>
								<Image
									src='/144028-games-feature-pubg-image1-zkpdntqgbc 2.png'
									alt='img'
									width={150}
									height={150}
									className='object-cover'
								/>
							</div>
						))}
					</div>
				</div>

				<div className='mt-7'>
					<div className='flex gap-3 '>
						<svg
							width='15'
							height='15'
							viewBox='0 0 15 15'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<g clip-path='url(#clip0_30_7665)'>
								<path
									d='M0.6155 11.14C0.5432 11.0439 0.503545 10.9272 0.502333 10.8069V10.2498C0.502333 10.2498 0.502333 9.91676 0.83075 10.0673C0.83075 10.0673 4.86683 11.896 5.51667 12.1824C6.13898 12.4717 6.81847 12.617 7.50467 12.6077C8.18776 12.6087 8.86318 12.4637 9.48567 12.1824L14.1739 10.0673C14.5 9.91676 14.5 10.2498 14.5 10.2498V10.8069C14.4958 10.9278 14.4556 11.0446 14.3845 11.1423C14.2737 11.2928 14.0841 11.4568 13.5614 11.7018C13.1455 11.8983 9.92725 13.3456 9.481 13.5509C8.85902 13.8362 8.18194 13.9814 7.49767 13.9762C6.7224 13.9761 5.95838 13.7907 5.26933 13.4354C4.43225 13.0563 1.85742 11.9007 1.43858 11.7018C0.913583 11.4521 0.766 11.3203 0.6155 11.14ZM1.43858 7.65576L5.51433 5.8066C5.91547 5.62415 6.3405 5.49963 6.77667 5.43676V8.76585C6.77667 8.99685 7.10975 9.17243 7.49767 9.17243C7.88558 9.17243 8.16325 8.98985 8.16325 8.76585V5.4461C8.61708 5.50735 9.06158 5.62868 9.48333 5.8066L13.5591 7.65576C13.8968 7.81501 14.4977 8.09968 14.4977 8.55293C14.4977 9.00618 13.9079 9.27393 13.5591 9.44543L9.48333 11.2946C8.86094 11.5762 8.18546 11.7212 7.50233 11.7198C6.81614 11.7292 6.13665 11.5839 5.51433 11.2946L1.43858 9.44543C1.08975 9.27451 0.5 9.00151 0.5 8.5506C0.5 8.09968 1.10083 7.81326 1.43858 7.65576ZM2.49267 8.96651C2.94183 9.19751 3.47442 9.19751 3.92358 8.96651C4.32142 8.73551 4.32375 8.36801 3.92358 8.13876C3.70194 8.02601 3.45679 7.96724 3.20812 7.96724C2.95945 7.96724 2.71431 8.02601 2.49267 8.13876C2.096 8.36743 2.10417 8.73376 2.49267 8.96651ZM7.5 4.93043C7.1135 4.93054 6.73565 4.81605 6.41422 4.60142C6.0928 4.38679 5.84224 4.08166 5.69423 3.72463C5.54621 3.3676 5.5074 2.97469 5.58269 2.5956C5.65797 2.2165 5.84399 1.86825 6.1172 1.59487C6.39041 1.32149 6.73856 1.13527 7.11761 1.05976C7.49665 0.984243 7.88958 1.02282 8.2467 1.17062C8.60383 1.31842 8.9091 1.5688 9.12392 1.8901C9.33875 2.2114 9.45347 2.58918 9.45358 2.97568V2.97743C9.45358 4.05601 8.57858 4.93043 7.5 4.93043Z'
									fill='#F03D00'
								/>
							</g>
							<defs>
								<clipPath id='clip0_30_7665'>
									<rect
										width='14'
										height='14'
										fill='white'
										transform='translate(0.5 0.5)'
									/>
								</clipPath>
							</defs>
						</svg>
						<h3
							className='font-bold text-[14px] leading-[120%] text-[#212529]'
							style={{ fontFamily: 'var(--font3)' }}
						>
							{tHome('titles.mobileGames')}
						</h3>
					</div>

					<div className='grid grid-cols-2 gap-3 mt-3 place-items-center'>
						{[1, 2, 3, 4, 5, 6, 7, 8].map((el, i) => (
							<div key={i} className='flex justify-center'>
								<Image
									src='/144028-games-feature-pubg-image1-zkpdntqgbc 2.png'
									alt='img'
									width={150}
									height={150}
									className='object-cover'
								/>
							</div>
						))}
					</div>
				</div>
			</div>

			{showNotification && (
				<CustomNotification
					message='Ваш email успешно подтвержден!'
					onClose={handleCloseNotification}
				/>
			)}
		</>
	)
}
