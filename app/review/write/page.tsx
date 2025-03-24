"use client";
import React, { useState } from "react";

const Write = () => {
  const [reviewText, setReviewText] = useState(""); // Состояние для текста отзыва
  const [rating, setRating] = useState<null | "negative" | "positive">(null); // Состояние для лайка/дизлайка ("positive" или "negative")
  const handleSubmit = (e) => {
    e.preventDefault();
    if (reviewText.trim()) {
      // Здесь можно добавить логику отправки отзыва на бэкенд
      console.log("Отправлен отзыв:", reviewText);
      setReviewText(""); // Очищаем поле после отправки
    } else {
      alert("Пожалуйста, введите текст отзыва");
    }
  };

  return (
    <div className="flex flex-col gap-4 mt-7 mb-3 ">
      {/* Ссылка "Вернуться" */}
      <p className="font-normal text-[15px] leading-[87%] text-[#14229e] cursor-pointer hover:underline">
        Вернуться
      </p>

      {/* Заголовок */}
      <div className="flex gap-2 items-center">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="20" height="20" rx="4" fill="#1C34FF" />
          <path
            opacity="0.68"
            d="M15.1135 9.23292V10C15.1135 12.4107 15.1135 13.6161 14.3646 14.365C13.6157 15.1139 12.4103 15.1139 9.99964 15.1139C7.58892 15.1139 6.38357 15.1139 5.63466 14.365C4.88574 13.6161 4.88574 12.4107 4.88574 10C4.88574 7.58929 4.88574 6.38393 5.63466 5.63502C6.38357 4.88611 7.58892 4.88611 9.99964 4.88611H10.7667"
            stroke="white"
            stroke-width="1.1"
            stroke-linecap="round"
          />
          <path
            d="M13.2027 4.79072L12.8708 5.12252L9.8205 8.1729C9.6139 8.3795 9.51059 8.48278 9.42173 8.59672C9.31693 8.73106 9.22708 8.87645 9.15377 9.03028C9.09162 9.16068 9.04542 9.29927 8.95302 9.57649L8.6572 10.464L8.46578 11.0382C8.42031 11.1746 8.45581 11.325 8.55749 11.4267C8.65916 11.5284 8.80956 11.5639 8.94596 11.5184L9.52021 11.327L10.4077 11.0311C10.6849 10.9387 10.8235 10.8926 10.9539 10.8304C11.1077 10.7571 11.2531 10.6672 11.3874 10.5625C11.5014 10.4736 11.6047 10.3703 11.8113 10.1637L14.8616 7.11331L15.1935 6.78151C15.7432 6.23177 15.7432 5.34047 15.1935 4.79072C14.6437 4.24098 13.7524 4.24098 13.2027 4.79072Z"
            stroke="white"
            stroke-width="1.1"
          />
          <path
            opacity="0.68"
            d="M12.8709 5.12253C12.8709 5.12253 12.9123 5.8276 13.5345 6.44972C14.1566 7.07184 14.8617 7.11331 14.8617 7.11331M9.52025 11.327L8.65723 10.464"
            stroke="white"
            stroke-width="1.1"
          />
        </svg>
        <h2
          className="font-bold text-[14px] leading-[120%] text-[#212529]"
          style={{ fontFamily: "var(--font3)" }}
        >
          Оставить отзыв
        </h2>
      </div>

      {/* Форма */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* Текстовое поле с иконкой микрофона */}
        <div className="relative">
          <textarea
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            placeholder="Поделитесь своими впечатлениями о нашем сервере"
            className="w-full h-40 p-3 border border-gray-300 rounded-[8px] text-[#212529] text-[14px] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#14229e] resize-none"
          />
          {/* Иконка микрофона */}
        </div>

        {/* Кнопка "Оставить отзыв" */}
        <div className="flex justify-between items-center">
          <div className="flex gap-5 items-center ml-3">
            <div
              style={{
                display: "inline-block",
                backgroundColor:
                  rating === "positive" ? "#eafff4" : "transparent",
                borderRadius: "50%", // Округление углов
                padding: "6px", // Паддинг для контейнера
              }}
              onClick={() => setRating("positive")}
            >
              <svg
                width="12"
                height="15"
                viewBox="0 0 10 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.384612 5.09657L0.767793 5.06351C0.750049 4.85879 0.573805 4.70434 0.368032 4.7132C0.162255 4.72206 0 4.89108 0 5.09657H0.384612ZM9.22355 6.02937L8.86176 8.11666L9.61975 8.24748L9.98154 6.16014L9.22355 6.02937ZM5.63841 10.7326H3.25451V11.5H5.63841V10.7326ZM2.78714 10.3041L2.37065 5.4985L1.60429 5.5646L2.02078 10.3702L2.78714 10.3041ZM8.86176 8.11666C8.60187 9.61603 7.24675 10.7326 5.63841 10.7326V11.5C7.60054 11.5 9.29263 10.1345 9.61975 8.24748L8.86176 8.11666ZM5.64343 2.46984L5.30359 4.53916L6.06271 4.66324L6.40255 2.59393L5.64343 2.46984ZM2.53214 5.1024L3.26995 4.46811L2.76781 3.88674L2.03001 4.52105L2.53214 5.1024ZM4.61226 2.40431L4.85621 1.46606L4.11165 1.27336L3.8677 2.21161L4.61226 2.40431ZM5.22467 1.28197L5.29903 1.3058L5.53431 0.57514L5.45995 0.551314L5.22467 1.28197ZM4.24278 3.34771C4.40273 3.04892 4.52698 2.73243 4.61226 2.40431L3.8677 2.21161C3.79777 2.48055 3.69586 2.74038 3.56428 2.98612L4.24278 3.34771ZM5.29903 1.3058C5.45615 1.35617 5.56774 1.47725 5.60441 1.61833L6.34902 1.42564C6.24363 1.02042 5.93276 0.702848 5.53431 0.57514L5.29903 1.3058ZM4.85621 1.46606C4.87421 1.39698 4.92421 1.33351 4.99985 1.29713L4.6659 0.605776C4.39309 0.736927 4.18817 0.979019 4.11165 1.27336L4.85621 1.46606ZM4.99985 1.29713C5.06893 1.26391 5.15026 1.25813 5.22467 1.28197L5.45995 0.551314C5.19857 0.467535 4.91339 0.486797 4.6659 0.605776L4.99985 1.29713ZM6.1044 5.48029H8.76135V4.71284H6.1044V5.48029ZM1.26604 10.8124L0.767793 5.06351L0.00143074 5.12962L0.499682 10.8785L1.26604 10.8124ZM0.769223 10.867V5.09657H0V10.867H0.769223ZM0.499682 10.8785C0.492918 10.8005 0.55459 10.7326 0.634204 10.7326V11.5C1.00649 11.5 1.29805 11.1817 1.26604 10.8124L0.499682 10.8785ZM6.40255 2.59393C6.4664 2.20503 6.44819 1.80709 6.34902 1.42564L5.60441 1.61833C5.67672 1.89635 5.69 2.18638 5.64343 2.46984L6.40255 2.59393ZM3.25451 10.7326C3.01148 10.7326 2.80818 10.5468 2.78714 10.3041L2.02078 10.3702C2.07614 11.0089 2.61162 11.5 3.25451 11.5V10.7326ZM3.26995 4.46811C3.61859 4.16837 3.99442 3.8116 4.24278 3.34771L3.56428 2.98612C3.38665 3.31788 3.10382 3.59787 2.76781 3.88674L3.26995 4.46811ZM9.98154 6.16014C10.1125 5.40472 9.53022 4.71284 8.76135 4.71284V5.48029C9.05191 5.48029 9.27335 5.74209 9.22355 6.02937L9.98154 6.16014ZM0.634204 10.7326C0.709183 10.7326 0.769223 10.7931 0.769223 10.867H0C0 11.2162 0.283531 11.5 0.634204 11.5V10.7326ZM5.30359 4.53916C5.22272 5.0318 5.60333 5.48029 6.1044 5.48029V4.71284C6.07881 4.71284 6.05835 4.68972 6.06271 4.66324L5.30359 4.53916ZM2.37065 5.4985C2.35762 5.34808 2.4178 5.20073 2.53214 5.1024L2.03001 4.52105C1.7283 4.78044 1.56998 5.16876 1.60429 5.5646L2.37065 5.4985Z"
                  fill="#03CC60"
                />
              </svg>
            </div>

            <div
              style={{
                display: "inline-block",
                backgroundColor:
                  rating === "negative" ? "#ffebeb" : "transparent",
                borderRadius: "50%", // Округление углов
                padding: "6px", // Паддинг для контейнера
              }}
              onClick={() => setRating("negative")}
            >
              <svg
                width="12"
                height="15"
                viewBox="0 0 10 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.61539 6.90343L9.23221 6.93649C9.24995 7.14121 9.4262 7.29566 9.63197 7.2868C9.83775 7.27794 10 7.10892 10 6.90343H9.61539ZM0.776448 5.97063L1.13824 3.88334L0.380246 3.75252L0.0184552 5.83986L0.776448 5.97063ZM4.36159 1.26744H6.74549V0.5H4.36159L4.36159 1.26744ZM7.21286 1.69593L7.62935 6.5015L8.39571 6.4354L7.97922 1.62983L7.21286 1.69593ZM1.13824 3.88334C1.39813 2.38397 2.75325 1.26744 4.36159 1.26744L4.36159 0.5C2.39946 0.5 0.707371 1.86554 0.380246 3.75252L1.13824 3.88334ZM4.35657 9.53016L4.69641 7.46084L3.93729 7.33676L3.59745 9.40607L4.35657 9.53016ZM7.46786 6.8976L6.73005 7.53189L7.23219 8.11326L7.96999 7.47895L7.46786 6.8976ZM5.38774 9.59569L5.14379 10.5339L5.88835 10.7266L6.1323 9.78839L5.38774 9.59569ZM4.77533 10.718L4.70097 10.6942L4.46569 11.4249L4.54005 11.4487L4.77533 10.718ZM5.75722 8.65229C5.59727 8.95108 5.47302 9.26757 5.38774 9.59569L6.1323 9.78839C6.20223 9.51945 6.30414 9.25962 6.43572 9.01388L5.75722 8.65229ZM4.70097 10.6942C4.54385 10.6438 4.43226 10.5227 4.39559 10.3817L3.65098 10.5744C3.75637 10.9796 4.06724 11.2972 4.46569 11.4249L4.70097 10.6942ZM5.14379 10.5339C5.12579 10.603 5.07579 10.6665 5.00015 10.7029L5.3341 11.3942C5.60691 11.2631 5.81183 11.021 5.88835 10.7266L5.14379 10.5339ZM5.00015 10.7029C4.93107 10.7361 4.84974 10.7419 4.77533 10.718L4.54005 11.4487C4.80143 11.5325 5.08661 11.5132 5.3341 11.3942L5.00015 10.7029ZM3.8956 6.51971L1.23865 6.51971V7.28716L3.8956 7.28716V6.51971ZM8.73396 1.18758L9.23221 6.93649L9.99857 6.87038L9.50032 1.12148L8.73396 1.18758ZM9.23078 1.13304L9.23078 6.90343H10L10 1.13304H9.23078ZM9.50032 1.12148C9.50708 1.1995 9.44541 1.26744 9.3658 1.26744V0.5C8.99351 0.5 8.70195 0.818284 8.73396 1.18758L9.50032 1.12148ZM3.59745 9.40607C3.5336 9.79497 3.55181 10.1929 3.65098 10.5744L4.39559 10.3817C4.32328 10.1037 4.31 9.81362 4.35657 9.53016L3.59745 9.40607ZM6.74549 1.26744C6.98852 1.26744 7.19182 1.45316 7.21286 1.69593L7.97922 1.62983C7.92386 0.991061 7.38838 0.5 6.74549 0.5V1.26744ZM6.73005 7.53189C6.38141 7.83163 6.00558 8.1884 5.75722 8.65229L6.43572 9.01388C6.61335 8.68212 6.89618 8.40213 7.23219 8.11326L6.73005 7.53189ZM0.0184552 5.83986C-0.112467 6.59528 0.469783 7.28716 1.23865 7.28716V6.51971C0.948086 6.51971 0.726653 6.25791 0.776448 5.97063L0.0184552 5.83986ZM9.3658 1.26744C9.29082 1.26744 9.23078 1.20687 9.23078 1.13304H10C10 0.783801 9.71647 0.5 9.3658 0.5V1.26744ZM4.69641 7.46084C4.77728 6.9682 4.39667 6.51971 3.8956 6.51971V7.28716C3.92119 7.28716 3.94165 7.31028 3.93729 7.33676L4.69641 7.46084ZM7.62935 6.5015C7.64238 6.65192 7.5822 6.79927 7.46786 6.8976L7.96999 7.47895C8.2717 7.21956 8.43002 6.83124 8.39571 6.4354L7.62935 6.5015Z"
                  fill="#FF272C"
                />
              </svg>
            </div>
          </div>
          <button
            type="submit"
            className="self-end bg-[#aaaaab] text-[#ffffff] text-[14px] font-medium py-2 px-4 rounded-[25px] hover:bg-[#c0c1c5] transition-colors"
          >
            Оставить отзыв
          </button>
        </div>
      </form>
    </div>
  );
};

export default Write;
