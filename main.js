window.addEventListener("load", () => {
  document.querySelector(".loader").classList.remove("active");
});
const options = { rootMargin: "-100px" };
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      document.querySelector(".arrow-up").style.opacity = "0";
    } else {
      document.querySelector(".arrow-up").style.opacity = "1";
    }
  });
}, options);
observer.observe(document.getElementById("new-headlines"));
const loadData = new_headlines_books => {
  for (let i = 0; i < new_headlines_books.length; i++) {
    if (new_headlines_books[i].id === "new-headlines") {
      newBooks(new_headlines_books[i]);
    } else if (new_headlines_books[i].id === "politics") {
      loadPoliticsBooks(new_headlines_books[i]);
    } else if (new_headlines_books[i].raiting) {
      loadTopBooks(new_headlines_books[i]);
    }
  }
};

const getBooks = async () => {
  let data = await fetch("books.json");
  let books = await data.json();
  return books;
};
const getBlogly = async () => {
  let data = await fetch("blogly.json");
  let blogly = await data.json();
  return blogly;
};
const getWriters = async () => {
  let data = await fetch("top_writer.json");
  let writers = await data.json();
  return writers;
};
const getTeam = async () => {
  let data = await fetch("team.json");
  let team = await data.json();
  return team;
};
getBooks().then(data => {
  loadData(data);
  new Glider(document.querySelector(".glider"), {
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: false,
    arrows: {
      prev: ".glider-prev",
      next: ".glider-next",
    },
    duration: 1.2,

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          itemWidth: 400,
          duration: 1.2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          itemWidth: 400,
          duration: 1.2,
        },
      },
    ],
  });
});
getWriters().then(data => {
  loadTopWriters(data);
});
getTeam().then(data => {
  loadTeam(data);
});
getBlogly().then(data => {
  loadBlogly(data);
  new Glider(document.querySelector(".glider2"), {
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: false,
    arrows: {
      prev: ".glider-prev2",
      next: ".glider-next2",
    },
    duration: 0.6,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          itemWidth: 400,
          duration: 1.2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          itemWidth: 400,
          duration: 1.2,
        },
      },
    ],
  });
});

const newBooks = new_headlines_books => {
  let new_book = document.createElement("div");
  new_book.classList.add("new-book");

  let new_book_container = document.createElement("div");
  new_book_container.classList.add("new-book-container");
  let new_book_img = document.createElement("div");
  new_book_img.classList.add("new-book-img");
  let img = document.createElement("img");
  img.src = new_headlines_books.img.src;
  img.alt = new_headlines_books.img.alt;
  let new_book_text = document.createElement("div");
  new_book_text.classList.add("new-book-text");
  let h1 = document.createElement("h1");
  h1.textContent = new_headlines_books.title;
  let writer = document.createElement("p");
  writer.textContent = new_headlines_books.writer;
  let about = document.createElement("p");
  about.textContent = new_headlines_books.about;
  let add_to_cart = document.createElement("div");
  add_to_cart.classList.add("add-to-cart");
  let add_btn = document.createElement("button");
  add_btn.classList.add("add");
  add_btn.textContent = "Add To Cart";
  new_book.appendChild(new_book_container);
  new_book_container.appendChild(new_book_img);
  new_book_img.appendChild(img);
  new_book_container.appendChild(new_book_text);
  new_book_text.appendChild(h1);
  new_book_text.appendChild(writer);
  new_book_text.appendChild(about);
  new_book.appendChild(add_to_cart);
  add_to_cart.appendChild(add_btn);
  document.querySelector(".glider").append(new_book);
};
const add_to_que = (imgsrc, title) => {
  let que_items_container = document.querySelector(".que-items-container");
  let que_item = document.createElement("div");
  que_item.classList.add("que-item");
  let que_item_img = document.createElement("div");
  que_item_img.classList.add("que-item-img");
  let img = document.createElement("img");
  img.src = imgsrc;
  let que_item_text = document.createElement("div");
  que_item_text.classList.add("que-item-text");
  let h1 = document.createElement("h1");
  h1.textContent = title;
  let button = document.createElement("button");
  button.classList.add("delete");
  button.innerHTML = `<i class="fas fa-times"></i>`;

  que_item.appendChild(que_item_img);
  que_item_img.appendChild(img);
  que_item.appendChild(que_item_text);
  que_item_text.appendChild(h1);
  que_item.appendChild(button);
  que_items_container.appendChild(que_item);
};
const loadPoliticsBooks = new_headlines_books => {
  let every_book = document.createElement("div");
  every_book.classList.add("every-book");
  let every_book_content = document.createElement("div");
  every_book_content.classList.add("every-book-content");
  let every_book_img = document.createElement("div");
  every_book_img.classList.add("every-book-img");
  let img = document.createElement("img");
  img.src = new_headlines_books.img.src;
  img.alt = new_headlines_books.img.alt;
  img.classList.add("book-img");
  let every_book_text = document.createElement("div");
  every_book_text.classList.add("every-book-text");
  let h1 = document.createElement("h1");
  h1.textContent = new_headlines_books.title;
  h1.classList.add("every-book-title");
  let writer = document.createElement("p");
  writer.classList.add("writer");
  writer.textContent = new_headlines_books.writer;
  let about = document.createElement("p");
  about.classList.add("about");
  about.textContent = new_headlines_books.about;
  let add_to_cart_book = document.createElement("div");
  add_to_cart_book.classList.add("add-to-cart");
  let add_book = document.createElement("button");
  add_book.textContent = "Add to cart";
  add_book.classList.add("add");
  let every_book_container = document.querySelector(".every-books-container");
  every_book_container.appendChild(every_book);
  every_book.appendChild(every_book_content);
  every_book_content.appendChild(every_book_img);
  every_book_img.appendChild(img);
  every_book_content.appendChild(every_book_text);
  every_book_text.appendChild(h1);
  every_book_text.appendChild(writer);
  every_book_text.appendChild(about);
  every_book.appendChild(add_to_cart_book);
  add_to_cart_book.appendChild(add_book);
};
const loadGenre = (new_headlines_books, id) => {
  let every_book_img = document.querySelectorAll(".book-img");
  let h1 = document.querySelectorAll(".every-book-title");
  let writer = document.querySelectorAll(".writer");
  let about = document.querySelectorAll(".about");
  let counter = 0;
  new_headlines_books.filter(book => {
    if (book.id === id) {
      every_book_img[counter].src = book.img.src;
      h1[counter].textContent = book.title;
      writer[counter].textContent = book.writer;
      about[counter].textContent = book.about;
      counter++;
    }
  });
};
const loadTopBooks = data => {
  let top_books_and_writers = document.querySelector(".top-books");
  let top_book = document.createElement("div");
  top_book.classList.add("top-book");
  let raiting = document.createElement("p");
  raiting.classList.add("raiting");
  raiting.textContent = data.raiting;
  let top_book_content = document.createElement("div");
  top_book_content.classList.add("top-book-content");
  let top_book_img = document.createElement("div");
  top_book_img.classList.add("top-book-img");
  let img = document.createElement("img");
  img.src = data.img.src;
  img.alt = data.img.alt;
  let top_book_text = document.createElement("div");
  top_book_text.classList.add("top-book-text");
  let book_title = document.createElement("h1");
  book_title.textContent = data.title;
  let writer = document.createElement("p");
  writer.textContent = data.writer;

  top_book.appendChild(raiting);
  top_book.appendChild(top_book_content);
  top_book_content.appendChild(top_book_img);
  top_book_img.appendChild(img);
  top_book_content.appendChild(top_book_text);
  top_book_text.appendChild(book_title);
  top_book_text.appendChild(writer);
  top_books_and_writers.appendChild(top_book);
};
const loadTopWriters = data => {
  for (let i = 0; i < data.length; i++) {
    let top_writer_wrapper = document.querySelector(".top-writer-wrapper");
    let top_writer = document.createElement("div");
    top_writer.classList.add("top-writer");
    let writer_raiting = document.createElement("p");
    writer_raiting.classList.add("writer-raiting");
    writer_raiting.textContent = data[i].raiting;
    let top_writer_content = document.createElement("div");
    top_writer_content.classList.add("top-writer-content");
    let top_writer_img = document.createElement("div");
    top_writer_img.classList.add("top-writer-img");
    let img = document.createElement("img");
    img.src = data[i].writerimg.src;
    img.alt = data[i].writerimg.alt;
    let top_writer_text = document.createElement("div");
    top_writer_text.classList.add("top-writer-text");
    let writerName = document.createElement("p");
    writerName.textContent = data[i].writername;

    top_writer_wrapper.appendChild(top_writer);
    top_writer.appendChild(top_writer_content);
    top_writer.appendChild(writer_raiting);
    top_writer.appendChild(top_writer_content);
    top_writer_content.appendChild(top_writer_img);
    top_writer_img.appendChild(img);

    top_writer_content.appendChild(top_writer_text);
    top_writer_text.appendChild(writerName);
  }
};
const loadTeam = data => {
  for (let i = 0; i < data.length; i++) {
    let team_container = document.querySelector(".team-container");
    let team_member = document.createElement("div");
    team_member.classList.add("team-member");
    let team_member_img = document.createElement("div");
    team_member_img.classList.add("team-member-img");
    let img = document.createElement("img");
    img.src = data[i].img.src;
    img.alt = data[i].img.alt;
    let h1 = document.createElement("h1");
    h1.textContent = data[i].title;
    let p = document.createElement("p");
    p.textContent = data[i].name;

    team_container.appendChild(team_member);
    team_member.appendChild(team_member_img);
    team_member_img.appendChild(img);
    team_member.appendChild(h1);
    team_member.appendChild(p);
  }
};
const loadBlogly = data => {
  for (let i = 0; i < data.length; i++) {
    let writer_blogly = document.createElement("div");
    writer_blogly.classList.add("writer-blogly");
    let img_writer_blogly = document.createElement("div");
    img_writer_blogly.classList.add("img-writer-blogly");
    let img = document.createElement("img");
    img.src = data[i].img.src;
    img.alt = data[i].img.alt;
    let writer_text = document.createElement("div");
    writer_text.classList.add("writer-text");
    let h1 = document.createElement("h1");
    h1.textContent = data[i].bloglyname;
    let date = document.createElement("p");
    date.textContent = data[i].date;
    let text = document.createElement("p");
    text.textContent = data[i].text;

    writer_blogly.appendChild(img_writer_blogly);
    img_writer_blogly.appendChild(img);
    writer_text.appendChild(h1);
    writer_text.appendChild(date);
    writer_text.appendChild(text);
    writer_blogly.appendChild(writer_text);

    document.querySelector(".glider2").append(writer_blogly);
  }

  const countdownF = () => {
    let launcDate = new Date("December 12,2021 13:00:00").getTime();
    let launcDateTwo = new Date("December 15,2021 13:00:00").getTime();
    let launcDateThree = new Date("December 18,2021 13:00:00").getTime();
    let launcDateFour = new Date("December 20,2021 13:00:00").getTime();

    let interval = setInterval(() => {
      //Today Date in milis
      let now = new Date().getTime();
      let distance = launcDate - now;
      //Time
      //60 seconds in a minute 50 min in a hour 24 hours a day
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval);
      }
      let countdowns = document.querySelectorAll(".countdown");
      countdowns[0].textContent =
        days + "D:" + hours + "h:" + mins + "m:" + seconds + "s";
    }, 1000);

    const intervalTwo = setInterval(() => {
      //Today Date in milis
      let now = new Date().getTime();
      let distance = launcDateTwo - now;
      //Time
      //60 seconds in a minute 50 min in a hour 24 hours a day
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(intervalTwo);
      }
      let countdowns = document.querySelectorAll(".countdown");
      countdowns[1].textContent =
        days + "D:" + hours + "h:" + mins + "m:" + seconds + "s";
    }, 1000);

    const intervalThree = setInterval(() => {
      //Today Date in milis
      let now = new Date().getTime();
      let distance = launcDateThree - now;
      //Time
      //60 seconds in a minute 50 min in a hour 24 hours a day
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(intervalThree);
      }
      let countdowns = document.querySelectorAll(".countdown");
      countdowns[2].textContent =
        days + "D:" + hours + "h:" + mins + "m:" + seconds + "s";
    }, 1000);

    const intervalFour = setInterval(() => {
      //Today Date in milis
      let now = new Date().getTime();
      let distance = launcDateFour - now;
      //Time
      //60 seconds in a minute 50 min in a hour 24 hours a day
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(intervalFour);
      }
      let countdowns = document.querySelectorAll(".countdown");
      countdowns[3].textContent =
        days + "D:" + hours + "h:" + mins + "m:" + seconds + "s";
    }, 1000);
  };
  countdownF();

  let search = async searchValue => {
    let search_item_wrapper = document.querySelector(".search-item-wrapper");
    let data = await fetch("books.json");
    let books = await data.json();
    let filtered = books.filter(book => {
      let reg = new RegExp(`^${searchValue}`, "gi");

      return book.title.match(reg);
    });
    if (searchValue === "" || filtered.length === 0) {
      filtered = [];
    }

    outputToHtml(filtered, search_item_wrapper);
  };
  const debaunced = (fn, delaytime) => {
    let timeoutID;
    return () => {
      let value = document.getElementById("search").value;
      clearTimeout(timeoutID);
      timeoutID = setTimeout(() => {
        fn(value);
      }, delaytime);
    };
  };
  const outputToHtml = (filtered, search_item_wrapper) => {
    if (filtered.length > 0) {
      let file = filtered
        .map(
          match =>
            `<div class="search-item">
          <div class="search-img-container">
          <img src="${match.img.src}" alt="${match.img.alt}" class="img-searched">
          </div>
          <div class="search-item-text"><h1>${match.title}</h1>
          <p class="writer-search">${match.writer}</p>
          </div>
          </div>
          `
        )
        .join("");
      search_item_wrapper.innerHTML = file;
    } else {
      search_item_wrapper.innerHTML = "";
    }
  };
  const filteredSearch = (data, value) => {
    let books = data;
    let findBook = books.find(book => book.title === value);

    let found_book_container = document.querySelector(".found-books-container");
    document.getElementById("found-book-wrapper").style.display = "block";
    found_book_container.innerHTML = `
<div class=found-book>
<div class=found-book-container>
<div class=found-book-img>
<img src="${findBook.img.src}" alt="${findBook.img.alt}">
</div>
<div class=found-book-text>
<h1>${findBook.title}</h1>
<p class=found-writer>${findBook.writer}</p>
<p> ${findBook.about}
</p>
</div>
</div>
<div class=add-to-cart>
<button class=add>Add To Cart</button>
</div>
</div>`;
    let element = document.getElementById("found-book-wrapper");
    document.querySelector(".search-item-wrapper").innerHTML = "";
    let position = element.offsetTop;
    window.scrollTo({
      left: 0,
      top: position,
    });
  };
  //PROBAJ SA e.target-----------------------------------------------------------
  setTimeout(() => {
    document.querySelectorAll(".add").forEach(btn => {
      btn.addEventListener("click", e => {
        let img =
          e.target.parentElement.previousElementSibling.firstElementChild
            .firstElementChild.src;
        let title =
          e.target.parentElement.previousElementSibling.children[1]
            .firstElementChild.textContent;
        add_to_que(img, title);
      });
    });
  }, 1500);

  search = debaunced(search, 300);
  document.getElementById("search").addEventListener("input", search);

  document.getElementById("hamburger").addEventListener("click", () => {
    let width = document.querySelector(".menu").getBoundingClientRect().width;
    if (width === 0) {
      document.querySelector(".menu").style.width = "100%";
    } else {
      document.querySelector(".menu").style.width = "0%";
    }
  });
  document.getElementById("cart").addEventListener("click", () => {
    let width = document.querySelector(".que").getBoundingClientRect().width;
    if (window.innerWidth < 732 && width === 0) {
      document.querySelector(".que").style.width = "100%";
      ("Meee");
    } else if (window.innerWidth > 732 && width === 0) {
      document.querySelector(".que").style.width = "40%";
    } else {
      document.querySelector(".que").style.width = "0%";
    }
  });
  document.querySelectorAll(".close").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelector(".menu").style.width = "0%";
      document.querySelector(".que").style.width = "0%";
    });
  });
  document
    .querySelector(".search-item-wrapper")
    .addEventListener("click", e => {
      let value =
        e.target.firstElementChild.nextElementSibling.firstElementChild
          .textContent;
      console.log(e.target);
      getBooks().then(data => {
        filteredSearch(data, value);
      });
    });

  document.querySelectorAll(".delete").forEach(deletebtn => {
    deletebtn.addEventListener("click", e => {
      e.target.parentElement.remove();
    });
  });

  document
    .querySelector(".que-items-container")
    .addEventListener("click", e => {
      if (e.target.classList.contains("delete")) {
        e.target.parentElement.remove();
      }
    });

  document
    .querySelector(".found-books-container")
    .addEventListener("click", e => {
      if (e.target.classList.contains("add")) {
        let img =
          e.target.parentElement.previousElementSibling.firstElementChild
            .firstElementChild.src;
        let title =
          e.target.parentElement.previousElementSibling.children[1]
            .firstElementChild.textContent;
        add_to_que(img, title);
      }
    });
};
document.querySelectorAll(".button-genre").forEach(button => {
  button.addEventListener("click", e => {
    document.querySelectorAll(".active").forEach(active => {
      active.classList.remove("active");
    });

    loadBooksByGenre(e.currentTarget.id);
    e.currentTarget.classList.add("active");
  });
});
document.querySelectorAll(".nav-menu-link").forEach(link => {
  link.addEventListener("click", () => {
    document.querySelector(".aside").style.width = "0%";
  });
});
const loadBooksByGenre = id => {
  getBooks().then(data => {
    loadGenre(data, id);
  });
};
