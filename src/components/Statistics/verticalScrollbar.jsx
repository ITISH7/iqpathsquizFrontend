import React, { useEffect, useRef } from 'react';
import styles from './VerticalScrollbar.module.css'; // Import CSS module

const VerticalScrollbar = () => {
    const itemsContainerRef = useRef(null);

    useEffect(() => {
        const itemsContainer = itemsContainerRef.current;
        const items = itemsContainer.querySelectorAll(`.${styles.item}`);
        const thumbsContainer = itemsContainer.parentElement.querySelector(`.${styles.thumbs}`);

        // Clear any existing thumbs to avoid duplicates
        thumbsContainer.innerHTML = '';

        // Create thumbs dynamically for each item
        items.forEach((item) => {
            const wrapper = document.createElement('div');
            const label = document.createElement('div');
            const thumb = document.createElement('div');

            wrapper.classList.add(styles.wrapper);
            label.classList.add(styles.label);
            thumb.classList.add(styles.thumb);

            label.innerHTML = item.getAttribute('data-label');

            wrapper.appendChild(label);
            wrapper.appendChild(thumb);
            thumbsContainer.appendChild(wrapper);
        });

        // Sync scrollbar with item container
        const handleScroll = () => {
            const scrollTop = itemsContainer.scrollTop;
            const scrollHeight = itemsContainer.scrollHeight - itemsContainer.clientHeight;
            const thumbs = document.querySelectorAll(`.${styles.thumb}`);

            thumbs.forEach((thumb, index) => {
                const item = items[index];
                const itemTop = item.offsetTop - scrollTop;
                const thumbTop = (itemTop / scrollHeight) * itemsContainer.clientHeight;

                thumb.style.transform = `translateY(${thumbTop}px)`;
            });
        };

        itemsContainer.addEventListener('scroll', handleScroll);

        return () => {
            itemsContainer.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={styles.scrollContainer}>
            <div className={styles.customScrollbar}>
                <div className={styles.thumbs}></div>
            </div>
            <div className={styles.items} ref={itemsContainerRef}>
                <div className={styles.item} data-label="Item 1">Item 1</div>
                <div className={styles.item} data-label="Item 2">Item 2</div>
                <div className={styles.item} data-label="Item 3">Item 3</div>
                <div className={styles.item} data-label="Item 4">Item 4</div>
                <div className={styles.item} data-label="Item 5">Item 5</div>
                <div className={styles.item} data-label="Item 6">Item 6</div>
                <div className={styles.item} data-label="Item 7">Item 7</div>
                <div className={styles.item} data-label="Item 8">Item 8</div>
                <div className={styles.item} data-label="Item 9">Item 9</div>
                <div className={styles.item} data-label="Item 10">Item 10</div>
            </div>
        </div>
    );
};

export default VerticalScrollbar;
