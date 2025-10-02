/**
 * 단계적으로 비동기 처리 함수를 실행하는 경우
 * - 첫번째 호출 함수 결과 --> 두번째 함수 인자
 * ... 
 */

function getUser(userId, callback) {
    setTimeout(() => {
        console.log("사용자 조회:", userId);
        callback({ id: userId, name: "홍길동" });
    }, 1000);
}

function getPosts(user, callback) {
    setTimeout(() => {
        console.log(`${user.name}님의 게시물 가져오기`);
        callback(["게시물1", "게시물2"]);
    }, 1000);
}

function getComments(post, callback) {
    setTimeout(() => {
        console.log(`${post}의 댓글 가져오기`);
        callback(["댓글1", "댓글2"]);
    }, 1000);
}

getUser(1, (user) => {
    getPosts(user, (posts) => {
        getComments(posts[0], (comments) => {
            console.log("최종 댓글:", comments);
        });
    });
});
