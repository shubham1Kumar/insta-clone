export const homeHtml = `<div class="card w-[26rem] border border-[#4b4a4a]">
<div class="h-fit flex items-center px-5 py-3">
    <div class="avatar">
        <div class="w-10 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
    </div>
    <span class="flex flex-col ml-2 h-fit">
        <h2 class="text-sm leading-none flex items-center"><a href="#">shubhxm_dhiman</a>
            <span class="h-1 inline-block w-1 rounded-full ml-2 opacity-60 bg-white"></span>
            <span class="font-light text-xs ml-1">5h</span>
        </h2>
        <h5 class="text-xs mt-1 leading-none cursor-pointer opacity-60">Location</h5>
    </span>
</div>
<figure class="px-4"><img class="rounded-md"
        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
        alt="Shoes" /></figure>
<div class=" card-body">
    <div id="icon-container" class="-mt-3 flex items-center justify-between">
        <div class="flex gap-2">
            <span data-tip="Like" class=" tooltip cursor-pointer">
                <i id="likeBtn" class="likeBtn text-2xl fa-regular hover:opacity-80 fa-heart"></i>
            </span>

            <span data-tip="Comments" class="tooltip-error tooltip cursor-pointer">
                <i class="fa-regular fa-comment hover:opacity-80 text-2xl "></i></span>
            <span data-tip="Send" class="tooltip-error tooltip cursor-pointer"><i
                    class="fa-regular hover:opacity-80 fa-paper-plane text-2xl"></i></span>
        </div>
        <span>
            <span data-tip="Save" class=" tooltip cursor-pointer ">
                <i id="saveBtn"
                    class="saveBtn text-2xl hover:opacity-80 fa-regular fa-bookmark"></i>
            </span>
        </span>
    </div>

    <div  class=" text-sm -mt-1"><span class="like-count">16980</span> likes</div>

    <div class=" relative cursor-default text-xs w-full -mt-1 flex flex-col ">
        <div id="caption" class="caption h-4 overflow-hidden">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi placeat eligendi commodi
            iste consectetur nesciunt delectus minus a. Est porro earum officia deleniti
            reprehenderit atque iusto voluptatum ullam unde commodi.
        </div>
        <div id="readMore" class="readMore cursor-pointer opacity-80 self-end text-[11px] mr-3">
            read more
        </div>
    </div>
    <div class=" h-fit">
        <div class="opacity-75 w-fit cursor-pointer text-xs">
            View all 39 comments
        </div>
        <form class="w-full mt-2 text-xs" id="form">
            <input type="text" class=" pb-2 outline-none w-full bg-transparent border-b"
                placeholder="Add a comment…">

        </form>
    </div>
</div>
</div>`;