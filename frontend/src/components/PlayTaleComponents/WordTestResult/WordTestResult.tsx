// import { useWordTestResultSave } from "hooks/queries/queries"
import LoadingPage from "pages/LoadingPage"
import WordTestResultItem from "./WordTestResultItem"
import { useStoreDispatch, useStoreSelector } from "hooks/useStoreSelector"
import { testResultActions } from "store/testResultSlice"
import { useNavigate } from "react-router-dom"
import TaleNavigator from "components/UI/TaleNavigator"
import SuperHeroLanding from "components/PlayTaleComponents/SuperHeroLanding"
import WordTestBack from "assets/images/wordTestBack.png"
import WordTestTitle from "assets/images/wordTestTitle.png"
import Background from "assets/images/Background.png"

function WordTestResult() {
  const navigate = useNavigate()
  const wordResult = useStoreSelector((state) => state.testResult)
  console.log(wordResult, "wordResult333333")
  console.log(wordResult.testList, "wordResult testList")
  console.log(wordResult.title, "wordResult Title 7777")

  const onFinishHandler = function () {
    navigate(`/playtale`)
  }

  if (!wordResult.testList || wordResult.testList.length === 0) {
    return (
      <div className="w-full h-full">
        <TaleNavigator />
        <img
          alt="배경"
          src={Background}
          className="canvas-under-bg-container bg-vegis absolute -z-[60] h-full w-full"
        />
        <SuperHeroLanding>
          <img
            alt="단어테스트 배경"
            src={WordTestBack}
            className="w-[95%] h-[90%] -z-10 fixed top-[13%]"
          />
          <img
            alt="동화 제목"
            src={WordTestTitle}
            className=" z-20 fixed top-[-15%] h-[40%] w-[40%]"
          />
          <div className="z-30 fixed top-[8%] text-[290%]  text-orange-900">
            {wordResult.title}
          </div>
        </SuperHeroLanding>
        <div className="z-30 fixed top-[45%] left-[25%] text-[220%] text-orange-800">
          맞은 단어가 존재하지 않습니다
        </div>
        <div
          className="w-[15%] h-[10%] flex items-center justify-center rounded-full cursor-pointer bg-lime-300 border-[5px] border-lime-500 shadow-lg duration-[0.33s] hover:scale-[107%] font-jalnan text-[1.1rem] md:text-[1.4rem] lg:text-[1.6rem] fixed bottom-[20%] left-[42%] "
          onClick={onFinishHandler}
        >
          Finish
        </div>
      </div>
    )
  } else if (wordResult.testList.length === 1) {
    return (
      <div className="w-full h-full">
        <TaleNavigator />
        <img
          alt="배경"
          src={Background}
          className="canvas-under-bg-container bg-vegis absolute -z-[60] h-full w-full"
        />
        <SuperHeroLanding>
          <img
            alt="단어테스트 배경"
            src={WordTestBack}
            className="w-[95%] h-[90%] -z-10 fixed top-[13%]"
          />
          <img
            alt="동화 제목"
            src={WordTestTitle}
            className=" z-20 fixed top-[-15%] h-[40%] w-[40%]"
          />
          <div className="z-30 fixed top-[8%] text-[290%]  text-orange-900">
            {wordResult.title}
          </div>
        </SuperHeroLanding>
        <div className=" flex flex-row relative w-full h-full">
          <div className="absolute bottom-[30%] left-[42%] w-full drop-shadow-[0_35px_35px_rgba(254,255,203,1)]">
            <WordTestResultItem
              key={`word-result4-${wordResult.testList[0].id}`}
              word={wordResult.testList[0]}
            />
          </div>
        </div>
        <div
          className="w-[15%] h-[10%] flex items-center justify-center rounded-full cursor-pointer bg-lime-300 border-[5px] border-lime-500 shadow-lg duration-[0.33s] hover:scale-[107%] font-jalnan text-[1.1rem] md:text-[1.4rem] lg:text-[1.6rem] fixed bottom-[12%] left-[42%] "
          onClick={onFinishHandler}
        >
          Finish
        </div>
      </div>
    )
  } else if (wordResult.testList.length === 2) {
    return (
      <div className="w-full h-full">
        <TaleNavigator />
        <img
          alt="배경"
          src={Background}
          className="canvas-under-bg-container bg-vegis absolute -z-[60] h-full w-full"
        />
        <SuperHeroLanding>
          <img
            alt="단어테스트 배경"
            src={WordTestBack}
            className="w-[95%] h-[90%] -z-10 fixed top-[13%]"
          />
          <img
            alt="동화 제목"
            src={WordTestTitle}
            className=" z-20 fixed top-[-15%] h-[40%] w-[40%]"
          />
          <div className="z-30 fixed top-[8%] text-[290%]  text-orange-900">
            {wordResult.title}
          </div>
        </SuperHeroLanding>
        <div className=" flex flex-row relative w-full h-full">
          <div className="absolute bottom-[30%] left-[32%] w-full drop-shadow-[0_35px_35px_rgba(254,255,203,1)]">
            <WordTestResultItem
              key={`word-result4-${wordResult.testList[0].id}`}
              word={wordResult.testList[0]}
            />
          </div>
          <div className="absolute bottom-[30%] left-[52%] w-full  drop-shadow-[0_35px_35px_rgba(254,255,203,1)]">
            <WordTestResultItem
              key={`word-result4-${wordResult.testList[1].id}`}
              word={wordResult.testList[1]}
            />
          </div>
        </div>
        <div
          className="w-[15%] h-[10%] flex items-center justify-center rounded-full cursor-pointer bg-lime-300 border-[5px] border-lime-500 shadow-lg duration-[0.33s] hover:scale-[107%] font-jalnan text-[1.1rem] md:text-[1.4rem] lg:text-[1.6rem] fixed bottom-[12%] left-[42%] "
          onClick={onFinishHandler}
        >
          Finish
        </div>
      </div>
    )
  } else if (wordResult.testList.length === 3) {
    return (
      <div className="w-full h-full">
        <TaleNavigator />
        <img
          alt="배경"
          src={Background}
          className="canvas-under-bg-container bg-vegis absolute -z-[60] h-full w-full"
        />
        <SuperHeroLanding>
          <img
            alt="단어테스트 배경"
            src={WordTestBack}
            className="w-[95%] h-[90%] -z-10 fixed top-[13%]"
          />
          <img
            alt="동화 제목"
            src={WordTestTitle}
            className=" z-20 fixed top-[-15%] h-[40%] w-[40%]"
          />
          <div className="z-30 fixed top-[8%] text-[290%]  text-orange-900">
            {wordResult.title}
          </div>
        </SuperHeroLanding>
        <div className=" flex flex-row relative w-full h-full">
          <div className="absolute bottom-[37%] left-[27%] w-full -rotate-6 drop-shadow-[0_35px_35px_rgba(254,255,203,1)]">
            <WordTestResultItem
              key={`word-result4-${wordResult.testList[0].id}`}
              word={wordResult.testList[0]}
            />
          </div>
          <div className="absolute bottom-[30%] left-[42%] w-full drop-shadow-[0_35px_35px_rgba(254,255,203,1)]">
            <WordTestResultItem
              key={`word-result4-${wordResult.testList[1].id}`}
              word={wordResult.testList[1]}
            />
          </div>
          <div className="absolute bottom-[21%] left-[57%] w-full rotate-6 drop-shadow-[0_35px_35px_rgba(254,255,203,1)]">
            <WordTestResultItem
              key={`word-result4-${wordResult.testList[2].id}`}
              word={wordResult.testList[2]}
            />
          </div>
        </div>
        <div
          className="w-[15%] h-[10%] flex items-center justify-center rounded-full cursor-pointer bg-lime-300 border-[5px] border-lime-500 shadow-lg duration-[0.33s] hover:scale-[107%] font-jalnan text-[1.1rem] md:text-[1.4rem] lg:text-[1.6rem] fixed bottom-[12%] left-[42%] "
          onClick={onFinishHandler}
        >
          Finish
        </div>
      </div>
    )
  } else if (wordResult.testList.length === 4) {
    return (
      <div className="w-full h-full">
        <TaleNavigator />
        <img
          alt="배경"
          src={Background}
          className="canvas-under-bg-container bg-vegis absolute -z-[60] h-full w-full"
        />
        <SuperHeroLanding>
          <img
            alt="단어테스트 배경"
            src={WordTestBack}
            className="w-[90%] h-[85%] -z-10 fixed bottom-[1%]"
          />
          <img
            alt="동화 제목"
            src={WordTestTitle}
            className=" z-20 fixed top-[-15%] h-[40%] w-[40%]"
          />
          <div className="z-30 fixed top-[8%] text-[290%]  text-orange-900">
            {wordResult.title}
          </div>
        </SuperHeroLanding>
        <div className=" flex flex-row relative w-full h-full">
          <div className="absolute bottom-[33%] left-[21%] w-full -rotate-6 drop-shadow-[0_35px_35px_rgba(254,255,203,1)]">
            <WordTestResultItem
              key={`word-result4-${wordResult.testList[0].id}`}
              word={wordResult.testList[0]}
            />
          </div>
          <div className="absolute bottom-[18%] left-[36%] w-full rotate-6 drop-shadow-[0_35px_35px_rgba(254,255,203,1)]">
            <WordTestResultItem
              key={`word-result4-${wordResult.testList[1].id}`}
              word={wordResult.testList[1]}
            />
          </div>
          <div className="absolute bottom-[34%] left-[50%] w-full -rotate-6 drop-shadow-[0_35px_35px_rgba(254,255,203,1)]">
            <WordTestResultItem
              key={`word-result4-${wordResult.testList[2].id}`}
              word={wordResult.testList[2]}
            />
          </div>
          <div className="absolute bottom-[18%] left-[64%] w-full rotate-6 drop-shadow-[0_35px_35px_rgba(254,255,203,1)]">
            <WordTestResultItem
              key={`word-result4-${wordResult.testList[3].id}`}
              word={wordResult.testList[3]}
            />
          </div>
        </div>
        <div
          className="w-[15%] h-[8%] flex items-center justify-center rounded-full cursor-pointer bg-lime-300 border-[5px] border-lime-500 shadow-lg duration-[0.33s] hover:scale-[107%] font-jalnan text-[1.1rem] md:text-[1.4rem] lg:text-[1.6rem] fixed bottom-[12%] left-[42%] "
          onClick={onFinishHandler}
        >
          Finish
        </div>
      </div>
    )
  } else if (wordResult.testList.length === 5) {
    return (
      <div className="w-full h-full">
        <TaleNavigator />
        <img
          alt="배경"
          src={Background}
          className="canvas-under-bg-container bg-vegis absolute -z-[60] h-full w-full"
        />
        <SuperHeroLanding>
          <img
            alt="단어테스트 배경"
            src={WordTestBack}
            className="w-[95%] h-[90%] -z-10 fixed top-[13%]"
          />
          <img
            alt="동화 제목"
            src={WordTestTitle}
            className=" z-20 fixed top-[-15%] h-[40%] w-[40%]"
          />
          <div className="z-30 fixed top-[8%] text-[290%]  text-orange-900">
            {wordResult.title}
          </div>
        </SuperHeroLanding>
        <div className=" flex flex-row relative w-full h-full">
          <div className="absolute bottom-[25%] left-[16%] w-full drop-shadow-[0_35px_35px_rgba(254,255,203,1)]">
            <WordTestResultItem
              key={`word-result4-${wordResult.testList[0].id}`}
              word={wordResult.testList[0]}
            />
          </div>
          <div className="absolute bottom-[17%] left-[29%] w-full rotate-6 drop-shadow-[0_35px_35px_rgba(254,255,203,1)]">
            <WordTestResultItem
              key={`word-result4-${wordResult.testList[1].id}`}
              word={wordResult.testList[1]}
            />
          </div>
          <div className="absolute bottom-[33%] left-[42%] w-full -rotate-6 drop-shadow-[0_35px_35px_rgba(254,255,203,1)]">
            <WordTestResultItem
              key={`word-result4-${wordResult.testList[2].id}`}
              word={wordResult.testList[2]}
            />
          </div>
          <div className="absolute bottom-[16%] left-[56%] w-full rotate-6 drop-shadow-[0_35px_35px_rgba(254,255,203,1)]">
            <WordTestResultItem
              key={`word-result4-${wordResult.testList[3].id}`}
              word={wordResult.testList[3]}
            />
          </div>
          <div className="absolute bottom-[23%] left-[70%] w-full drop-shadow-[0_35px_35px_rgba(254,255,203,1)]">
            <WordTestResultItem
              key={`word-result4-${wordResult.testList[4].id}`}
              word={wordResult.testList[4]}
            />
          </div>
        </div>
        <div
          className="w-[15%] h-[10%] flex items-center justify-center rounded-full cursor-pointer bg-lime-300 border-[5px] border-lime-500 shadow-lg duration-[0.33s] hover:scale-[107%] font-jalnan text-[1.1rem] md:text-[1.4rem] lg:text-[1.6rem] fixed bottom-[12%] left-[42%] "
          onClick={onFinishHandler}
        >
          Finish
        </div>
      </div>
    )
  }

  return (
    <>
      <TaleNavigator />
      <SuperHeroLanding>
        <img
          alt="단어테스트 배경"
          src={WordTestBack}
          className="w-[95%] h-[90%] -z-10 fixed top-[13%]"
        />
        <img
          alt="동화 제목"
          src={WordTestTitle}
          className=" z-20 fixed top-[-15%] h-[40%] w-[40%]"
        />
        <div className="z-30 fixed top-[9%] text-[220%] text-white">
          {wordResult.title}
        </div>
      </SuperHeroLanding>

      <div
        className="w-[15%] h-[10%] flex items-center justify-center rounded-full cursor-pointer bg-lime-300 border-[5px] border-lime-500 shadow-lg duration-[0.33s] hover:scale-[107%] font-jalnan text-[1.1rem] md:text-[1.4rem] lg:text-[1.6rem] fixed bottom-[12%] left-[42%] "
        onClick={onFinishHandler}
      >
        Finish
      </div>
    </>
  )
}

export default WordTestResult
