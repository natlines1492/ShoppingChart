import styled from "styled-components";

function BackIcon(props) {
  return (
    <svg
      width={24}
      height={25}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="m13.348 4.643-.892-.868a.98.98 0 0 0-1.362 0l-7.81 7.59a.916.916 0 0 0 0 1.325l7.81 7.593a.98.98 0 0 0 1.362 0l.892-.867a.92.92 0 0 0-.016-1.34L8.49 13.592h11.548a.949.949 0 0 0 .964-.938v-1.25c0-.52-.43-.937-.964-.937H8.49l4.842-4.485a.914.914 0 0 0 .016-1.34Z"
        fill="#444"
      />
    </svg>
  );
}

export default styled(BackIcon)``;