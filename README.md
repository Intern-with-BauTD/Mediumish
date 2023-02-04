# Rule Coding

Created: February 3, 2023 9:39 AM

# 1. Import:
    1. Import react đầu tiên.
    2. Sau đó import các module theo thứ tự sau:
        1. Module npm package nằm dưới react.
        2. Module components trong source.
        3. Module utils
        4. Module images
        5. Module components nằm cùng folder.
        6. Module config/fake data nằm cùng folder.
        7. Module SCSS.
    3. Ở mỗi module, sắp xếp theo thứ tự từ a-z.

# 2. Redux:
    1. Tên function của redux bắt đầu bằng action.
    2. Luôn có action CLEAR_GET_DATA cho task api, sử dụng khi thoát component.

# 3. SCSS:
    1. Sử dụng module SCSS.
    2. Global chỉ được phép dùng trong các trường hợp:
        1. Custom class của npm package.
        2. Custom class của module khác.
    3. Tận dụng file Function.scss để viết các hàm tạo css trùng lặp.
    4. Sử dụng biến `--spacing` và `--font-size` để responsive.

# 4. Functions:
    
    ```jsx
    function action(vals = {}, options = {}) {
    	const { x, y } = vals;
    	const { isShowWarning, isXXX } = options;
    	...
    	return { value }
    }
    ```
